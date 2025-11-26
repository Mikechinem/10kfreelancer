import fs from "fs";
import path from "path";

export async function POST(req) {
  const body = await req.json();
  const { event_name, event_source_url, utm_data } = body;

  // Send event to Meta
  await fetch(
    `https://graph.facebook.com/v18.0/321246067225032/events?access_token=${process.env.FB_CONVERSION_API_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [
          {
            event_name,
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url,
            user_data: {
              client_ip_address: req.headers.get("x-forwarded-for"),
              client_user_agent: req.headers.get("user-agent"),
            },
            custom_data: utm_data || null,
          },
        ],
      }),
    }
  );

  // Save event locally for dashboard
  const filePath = path.join(process.cwd(), "data", "events.json");
  const existingEvents = JSON.parse(fs.readFileSync(filePath, "utf8"));
  existingEvents.push({
    event_name,
    event_source_url,
    utm_data,
    timestamp: new Date().toISOString(),
  });
  fs.writeFileSync(filePath, JSON.stringify(existingEvents, null, 2));

  return Response.json({ success: true });
}
