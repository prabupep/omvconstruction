export function generateEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Customer Enquiry - OMV Construction</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #fbbf24, #059669); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px; }
        .header h1 { color: white; margin: 0; font-size: 28px; }
        .header p { color: white; margin: 10px 0 0 0; font-size: 16px; }
        .contact-info { background: #f8fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #059669; }
        .contact-info h2 { color: #1f2937; margin-top: 0; }
        .contact-table { width: 100%; border-collapse: collapse; }
        .contact-table td { padding: 8px 0; }
        .contact-table .label { font-weight: bold; color: #374151; }
        .contact-table .value { color: #6b7280; }
        .contact-table a { color: #059669; text-decoration: none; }
        .message-section { background: #ffffff; padding: 25px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 20px 0; }
        .message-section h2 { color: #1f2937; margin-top: 0; }
        .message-content { background: #f9fafb; padding: 20px; border-radius: 6px; border-left: 3px solid #fbbf24; }
        .next-steps { background: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; margin: 20px 0; }
        .next-steps h3 { color: #065f46; margin-top: 0; }
        .next-steps ul { color: #047857; padding-left: 20px; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
        .footer p { color: #6b7280; font-size: 14px; margin: 0; }
        .project-type { text-transform: capitalize; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Customer Enquiry</h1>
        <p>OMV Construction Services</p>
      </div>
      
      <div class="contact-info">
        <h2>Contact Information</h2>
        <table class="contact-table">
          <tr>
            <td class="label">Name:</td>
            <td class="value">${data.name}</td>
          </tr>
          <tr>
            <td class="label">Email:</td>
            <td class="value"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${data.phone ? `
          <tr>
            <td class="label">Phone:</td>
            <td class="value"><a href="tel:${data.phone}">${data.phone}</a></td>
          </tr>
          ` : ''}
          ${data.company ? `
          <tr>
            <td class="label">Company:</td>
            <td class="value">${data.company}</td>
          </tr>
          ` : ''}
          <tr>
            <td class="label">Project Type:</td>
            <td class="value project-type">${data.projectType.replace('_', ' ')}</td>
          </tr>
        </table>
      </div>
      
      <div class="message-section">
        <h2>Project Details</h2>
        <div class="message-content">
          <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
      
      <div class="next-steps">
        <h3>Next Steps</h3>
        <ul>
          <li>Review the project requirements</li>
          <li>Prepare a detailed proposal</li>
          <li>Contact the client within 24 hours</li>
          <li>Schedule a free consultation if needed</li>
        </ul>
      </div>
      
      <div class="footer">
        <p>
          This email was sent from the OMV Construction Services customer enquiry form.<br>
          Submitted on: ${new Date().toLocaleString()}
        </p>
      </div>
    </body>
    </html>
  `;
}
