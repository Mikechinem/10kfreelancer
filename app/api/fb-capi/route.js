export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { event_name, event_source_url, event_id, utm_data } = body;

    const accessToken = process.env.FB_CONVERSION_API_TOKEN;
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    if (!accessToken || !pixelId) {
      return Response.json(
        { error: "Missing Facebook environment variables" },
        { status: 400 }
      );
    }

    // 1️⃣ Get REAL client IP + User Agent (correct way for Vercel)
    const forwarded = req.headers.get("x-forwarded-for");
    const clientIp = forwarded?.split(",")[0] ?? null;
    const userAgent = req.headers.get("user-agent") ?? null;

    // 2️⃣ Meta DOES NOT accept null fields in user_data, so only include if present
    const userData = {};
    if (clientIp) userData.client_ip_address = clientIp;
    if (userAgent) userData.client_user_agent = userAgent;

    // 3️⃣ Prepare final CAPI payload
    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url,
          event_id,
          user_data: userData,
          custom_data: utm_data || {},
        },
      ],
    };

    // 4️⃣ Send to Meta CAPI
    const metaResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const metaResult = await metaResponse.json();

    return Response.json({ success: true, fbResult: metaResult });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
