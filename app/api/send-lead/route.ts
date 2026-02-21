import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, state, price } = body;

    await resend.emails.send({
      from: "Wild Horizons <info@wildhorizons.travel>",
      to: "your@email.com", // change to your real email
      subject: "🔥 New Wild Horizons Trip Request",
      html: `
        <h2>New Trip Builder Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Platform:</strong> ${state.platform}</p>
        <p><strong>Duration:</strong> ${state.duration} days</p>
        <p><strong>Region:</strong> ${state.region}</p>
        <p><strong>Comfort:</strong> ${state.comfort}</p>
        <h3>Total Estimate: R ${price}</h3>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}