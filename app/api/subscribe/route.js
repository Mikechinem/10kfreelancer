export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, whatsapp } = body;

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400 }
      );
    }

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        fields: {
          name,
          whatsapp,
        },
        groups: [process.env.MAILERLITE_GROUP_ID],
        status: "active",
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return new Response(error, { status: 400 });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}
