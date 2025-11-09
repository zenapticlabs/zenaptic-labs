import { sendEmail, createErrorResponse, createSuccessResponse } from "../../lib/email.js";

export async function POST({ request }) {
  try {
    const data = await request.json();
    const formattedDate = new Date().toLocaleString();

    const html = `
      <body style="background-color: #f4f4f4;">
        <p><strong>Date and Time:</strong></p>
        <p style="color: #2e7d32; font-size: 12px; font-weight: bold;">${formattedDate}</p>
        <p><strong>Email:</strong></p>
        <p style="font-weight: 700; font-size: 12px;">${data.email}</p>
      </body>
    `;

    await sendEmail({
      fromName: "Follow up email",
      subject: "query : Follow ups",
      html,
    });

    return createSuccessResponse();
  } catch (error) {
    return createErrorResponse(error);
  }
}
