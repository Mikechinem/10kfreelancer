export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { event_name, event_source_url, event_id, utm_data } = body;

    const accessToken = process.env.FB_CONVERSION_API_TOKEN;
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    if (!accessToken || !pixelId) {
      return Response.json(
        { error: "Missing FB_CONVERSION_API_TOKEN or FB_PIXEL_ID" },
        { status: 400 }
      );
    }

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url,
          event_id,
          user_data: {
            client_ip_address: req.headers.get("x-forwarded-for"),
            client_user_agent: req.headers.get("user-agent"),
          },
          custom_data: utm_data || null,
        },
      ],
    };

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
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
