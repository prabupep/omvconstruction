# Email Setup Instructions for OMV Construction

This application now includes email functionality using Resend. Follow these steps to set up email sending:

## 1. Create Environment File

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend API Configuration
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
FROM_EMAIL=noreply@omvconstructions.in
TO_EMAIL=info@omvconstructions.in
REPLY_TO_EMAIL=info@omvconstructions.in

# Optional: Enable/disable email sending (for development)
ENABLE_EMAIL_SENDING=true
```

## 2. Get Resend API Key

1. Visit [Resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the key and paste it in your `.env.local` file

## 3. Domain Setup (Optional but Recommended)

For production use, you should:

1. **Add your domain** to Resend dashboard
2. **Verify domain ownership** by adding DNS records
3. **Update FROM_EMAIL** to use your verified domain (e.g., `noreply@yourdomain.com`)

## 4. Email Features

### What happens when someone submits the contact form:

1. **Form validation** - Checks required fields and email format
2. **Email sending** - Sends a professional HTML email to your business email
3. **User redirect** - User is redirected to thank you page
4. **Error handling** - Graceful fallback if email fails

### Email Template Includes:

- **Contact Information** - Name, email, phone, company, project type
- **Project Details** - Full message from the user
- **Next Steps** - Action items for your team
- **Professional Design** - Branded with OMV Construction colors
- **Clickable Links** - Direct email and phone links

## 5. Testing

### Test without API key:
- Set `ENABLE_EMAIL_SENDING=false` in `.env.local`
- Form will still work and redirect to thank you page
- Submissions will be logged to console

### Test with API key:
- Set `ENABLE_EMAIL_SENDING=true` in `.env.local`
- Add your `RESEND_API_KEY`
- Submit the contact form
- Check your email for the notification

## 6. Production Deployment

When deploying to production:

1. **Set environment variables** in your hosting platform
2. **Use verified domain** for FROM_EMAIL
3. **Monitor email delivery** in Resend dashboard
4. **Set up webhooks** (optional) for delivery notifications

## 7. Troubleshooting

### Common Issues:

- **"Invalid API key"** - Check your Resend API key
- **"Domain not verified"** - Use a verified domain or resend.com domain for testing
- **Emails not sending** - Check console logs and Resend dashboard
- **Form not redirecting** - Check browser console for JavaScript errors

### Development Mode:
- Set `ENABLE_EMAIL_SENDING=false` to disable emails during development
- All form submissions will still be logged to console

## 8. Cost Information

- **Resend Free Tier**: 3,000 emails/month
- **Resend Pro**: $20/month for 50,000 emails
- **No setup fees** or long-term contracts

## Support

For technical issues:
- Check the console logs in your browser and server
- Review the Resend dashboard for delivery status
- Contact support with specific error messages
