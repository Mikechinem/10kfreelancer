
// Handle POST requests

export const runtime = "nodejs"; // ensures this runs a sever side function //


export async function POST(req) {
  try {
    const body = await req.json();
    const { event_name, event_source_url, event_id, utm_data } = body;

    // Load env variables (must be set in Vercel dashboard for production)
    const accessToken = process.env.FB_CONVERSION_API_TOKEN;
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    if (!accessToken || !pixelId) {
      return new Response(
        JSON.stringify({ error: "Missing FB_CONVERSION_API_TOKEN or FB_PIXEL_ID" }),
        { status: 400 }
      );
    }

    if (!event_name || !event_id) {
      return new Response(
        JSON.stringify({ error: "Missing event_name or event_id" }),
        { status: 400 }
      );
    }

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: event_source_url || null,
          event_id,
          user_data: {
            client_ip_address: req.headers.get("x-forwarded-for") || null,
            client_user_agent: req.headers.get("user-agent") || null,
          },
          custom_data: utm_data || null,
        },
      ],
    };

    const fbResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const fbResult = await fbResponse.json();
    console.log("FB CAPI Response:", fbResult);

    return new Response(JSON.stringify({ success: true, fbResult }), { status: 200 });
  } catch (error) {
    console.error("CAPI Route Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

// Explicitly block GET requests to avoid accidental 405 issues
export async function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
