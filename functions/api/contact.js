export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    console.log("New contact submission:", { name, email, message });

    return Response.json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    return Response.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
