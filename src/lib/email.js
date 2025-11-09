import nodemailer from "nodemailer";

/**
 * Gets SMTP configuration from environment variables
 * @throws {Error} If required environment variables are missing
 */
function getSmtpConfig() {
  const host = import.meta.env.SMTP_HOST || "smtp.gmail.com";
  // Default to secure port 465 if not specified
  const port = parseInt(import.meta.env.SMTP_PORT || "465", 10);
  const user = import.meta.env.SMTP_USER;
  const password = import.meta.env.SMTP_PASSWORD;

  if (!user) {
    throw new Error("SMTP_USER environment variable is required");
  }
  if (!password) {
    throw new Error("SMTP_PASSWORD environment variable is required");
  }

  return {
    host,
    port,
    secure: true, // Always use secure connection
    auth: {
      user,
      pass: password,
    },
  };
}

/**
 * Gets recipient email from environment or falls back to sender email
 */
function getRecipientEmail(senderEmail) {
  return import.meta.env.SMTP_TO_EMAIL || senderEmail;
}

/**
 * Creates and verifies SMTP transporter
 * @throws {Error} If SMTP configuration is invalid or connection fails
 */
async function createTransporter() {
  const smtpConfig = getSmtpConfig();
  const transporter = nodemailer.createTransport(smtpConfig);
  await transporter.verify();
  return { transporter, smtpConfig };
}

/**
 * Sends an email using SMTP
 * @param {Object} options - Email options
 * @param {string} options.fromName - Sender name
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML email content
 * @throws {Error} If email sending fails
 */
export async function sendEmail({ fromName, subject, html }) {
  const { transporter, smtpConfig } = await createTransporter();
  const toEmail = getRecipientEmail(smtpConfig.auth.user);

  const mailOptions = {
    from: `"${fromName}" <${smtpConfig.auth.user}>`,
    to: toEmail,
    subject,
    html,
  };

  return await transporter.sendMail(mailOptions);
}

const DEFAULT_ERROR_MESSAGE =
  "We encountered an issue on our end. Please try again later. We apologize for the inconvenience.";
const DEFAULT_SUCCESS_MESSAGE =
  "Thank you for reaching out! We have received your Query and will get back to you shortly.";

const JSON_HEADERS = {
  "Content-Type": "application/json",
};

/**
 * Checks if the application is running in development mode
 */
function isDevelopment() {
  return import.meta.env.DEV || import.meta.env.MODE === "development";
}

/**
 * Creates error response for email failures
 * @param {Error} error - The error object
 * @param {string} [customMessage] - Optional custom error message
 */
export function createErrorResponse(error, customMessage) {
  const responseData = {
    message: customMessage || DEFAULT_ERROR_MESSAGE,
    ok: false,
  };

  if (isDevelopment()) {
    responseData.error = error?.message;
    responseData.errorCode = error?.code;
    responseData.errorName = error?.name;
  }

  return new Response(JSON.stringify(responseData), {
    status: 500,
    headers: JSON_HEADERS,
  });
}

/**
 * Creates success response
 * @param {string} [message] - Optional custom success message
 */
export function createSuccessResponse(message) {
  return new Response(
    JSON.stringify({
      message: message || DEFAULT_SUCCESS_MESSAGE,
      ok: true,
    }),
    {
      status: 200,
      headers: JSON_HEADERS,
    }
  );
}

