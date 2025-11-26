// app/api/fb-capi/route.js
export async function POST(req) {
  try {
    // 1️⃣ Read JSON body
    const body = await req.json();
    console.log("CAPI Payload received:", body);

    const { event_name, event_source_url, event_id, utm_data } = body;

    // 2️⃣ Validate required fields
    if (!event_name || !event_id) {
      return new Response(
        JSON.stringify({ error: "Missing event_name or event_id" }),
        { status: 400 }
      );
    }

    // 3️⃣ Load env variables
    const accessToken = process.env.FB_CONVERSION_API_TOKEN;
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    if (!accessToken || !pixelId) {
      return new Response(
        JSON.stringify({ error: "Missing FB_CONVERSION_API_TOKEN or FB_PIXEL_ID" }),
        { status: 400 }
      );
    }

    // 4️⃣ Build payload for Facebook
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

    // 5️⃣ Send to Facebook
    const fbResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const fbResult = await fbResponse.json();
    console.log("FB Response:", fbResult);

    // 6️⃣ Return success
    return new Response(JSON.stringify({ success: true, fbResult }), { status: 200 });
  } catch (error) {
    console.error("CAPI Route Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
