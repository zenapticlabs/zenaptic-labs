import { sendEmail, createErrorResponse, createSuccessResponse } from "../../lib/email.js";

export async function POST({ request }) {
  try {
    const data = await request.json();
    const formattedDate = new Date().toLocaleString();

    const html = `
      <body style="background-color: #f4f4f4;">
        <div style="max-width: 600px; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); font-family: Arial, sans-serif; color: #333;">
          <h2 style="background-color: #ff7d12; color: white; padding: 10px 0px; text-align: center; border-radius: 6px;">
            New Project Inquiry
          </h2>
          <p><strong>Date and Time:</strong></p>
          <p style="color: #2e7d32; font-size: 12px; font-weight: bold;">${formattedDate}</p>
          <p><strong>From:</strong></p>
          <p>${data.name}</p>
          <p style="font-weight: 700; font-size: 12px;">${data.email}</p>
          <p><strong>Company Name:</strong></p>
          <p>${data.companyName || "N/A"}</p>
          <p><strong>Budget:</strong></p>
          <p style="color: #2e7d32; font-weight: bold;">${data.budget || "N/A"}</p>
          <h3 style="text-align: center; font-size: 14px; font-weight: 700;">Project Description</h3>
          <p style="line-height: 1.8;">${data.projectDescription || "No description provided."}</p>
        </div>
      </body>
    `;

    await sendEmail({
      fromName: "Development Services",
      subject: "query : Development Services",
      html,
    });

    return createSuccessResponse();
  } catch (error) {
    return createErrorResponse(error);
  }
}
