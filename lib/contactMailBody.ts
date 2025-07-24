export function getContactMailBody({ firstName, lastName, email, subject, message }: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) {
  function escape(str: string) {
    // Replace special HTML characters with their corresponding HTML entities
    // This prevents malicious code injection (e.g., XSS attacks) by ensuring
    // that user-provided input is safely rendered as plain text in the email body.
    return str.replace(/[&<>"']/g, function (tag) {
      const chars: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      };
      return chars[tag] || tag;
    });
  }

  return `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 20px; margin: 0;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); overflow: hidden; border: 1px solid #e2e8f0;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 600;">New Contact Inquiry</h1>
        </div>

        <!-- Content -->
        <div style="padding: 24px;">
          
          <!-- Contact Info -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <div style="margin-bottom: 12px;">
              <span style="font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name: </span>
              <span style="font-size: 16px; color: #1e293b; font-weight: 500;">${escape(firstName)} ${escape(lastName)}</span>
            </div>
            <div style="margin-bottom: 12px;">
              <span style="font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email: </span>
              <a href="mailto:${escape(email)}" style="font-size: 16px; color: #3b82f6; font-weight: 500; text-decoration: none;">${escape(email)}</a>
            </div>
            <div>
              <span style="font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject: </span>
              <span style="font-size: 16px; color: #1e293b; font-weight: 500;">${escape(subject)}</span>
            </div>
          </div>

          <!-- Message -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
            <div style="font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Message:</div>
            <div style="font-size: 15px; color: #374151; line-height: 1.6;">${escape(message).replace(/\n/g, '<br>')}</div>
          </div>

          <!-- Reply Button -->
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${escape(email)}?subject=Re: ${escape(subject)}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply</a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; font-size: 12px; color: #64748b;">Sent from your website contact form</p>
        </div>
      </div>
    </div>
  `;
}