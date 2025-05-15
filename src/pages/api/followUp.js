import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST({ request }) {
  try {
    const data = await request.json();

    const mailerSend = new MailerSend({
      apiKey: import.meta.env.MAILERSEND_API_KEY,
    });

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const message = `
    <body style=" background-color: #f4f4f4;">
    <p ><strong>Date and Time:</strong></p>
    <p style="color: #2e7d32; font-size: 12px; font-weight: bold; ">${formattedDate}</p>
    <p ><strong>Email:</strong></p>
    <p style="font-weight:700; font-size:12px ">${data.email}</p>
</body>

    `;

    const sentFrom = new Sender(
      import.meta.env.MAILERSEND_FROM_EMAIL , "Follow up email"
    );
    const recipients = [
      new Recipient(import.meta.env.MAILERSEND_TO_EMAIL, import.meta.env.MAILERSEND_RECIEVER_NAME),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setHtml(message)
      .setSubject("query : Follow ups");

    await mailerSend.email.send(emailParams);

    return new Response(
      JSON.stringify({
        message:
          "Thank you for reaching out! We have received your Query and will get back to you shortly.",
        ok: true,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message:
          "We encountered an issue on our end. Please try again later. We apologize for the inconvenience.",
        ok: false,
      }),
      { status: 500 }
    );
  }
}
