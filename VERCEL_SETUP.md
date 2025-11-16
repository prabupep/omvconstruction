# Vercel Deployment Setup for Email Functionality

This guide will help you configure email sending on Vercel.

## Required Environment Variables in Vercel

You need to set the following environment variables in your Vercel project settings:

### 1. Go to Vercel Dashboard
1. Navigate to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Environment Variables**

### 2. Add the Following Variables

#### Required Variables:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

**How to get your Resend API Key:**
1. Go to [Resend.com](https://resend.com)
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Copy the key (starts with `re_`)
6. Paste it in Vercel environment variables

#### Email Configuration:

```env
ENABLE_EMAIL_SENDING=true
FROM_EMAIL=noreply@omvconstructions.in
TO_EMAIL=info@omvconstructions.in
```

**Important Notes:**
- `ENABLE_EMAIL_SENDING` must be set to exactly `"true"` (as a string)
- `FROM_EMAIL` should be a verified domain in Resend (or use `onboarding@resend.dev` for testing)
- `TO_EMAIL` is where you want to receive contact form submissions

### 3. Domain Verification (Important!)

If you're using a custom domain for `FROM_EMAIL`:

1. **Add Domain in Resend:**
   - Go to Resend Dashboard → **Domains**
   - Click **Add Domain**
   - Enter your domain (e.g., `omvconstructions.in`)

2. **Verify Domain:**
   - Resend will provide DNS records to add
   - Add these records to your domain's DNS settings
   - Wait for verification (usually takes a few minutes)

3. **For Testing (Quick Start):**
   - Use `onboarding@resend.dev` as `FROM_EMAIL` (no verification needed)
   - This is only for testing - switch to your verified domain for production

### 4. Environment Variable Settings

In Vercel, set each variable for:
- ✅ **Production** (for your live site)
- ✅ **Preview** (for preview deployments)
- ✅ **Development** (optional, for local dev)

### 5. Redeploy After Adding Variables

After adding environment variables:
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Or push a new commit to trigger a new deployment

## Troubleshooting Email Issues on Vercel

### Check Vercel Logs

1. Go to your Vercel project
2. Click on a deployment
3. Go to **Functions** tab
4. Click on `/api/send-email` function
5. Check the **Logs** for error messages

### Common Issues:

#### 1. "Email sending enabled but Resend API key not configured"
- **Solution:** Make sure `RESEND_API_KEY` is set in Vercel environment variables
- **Solution:** Redeploy after adding the variable

#### 2. "Domain not verified" error
- **Solution:** Verify your domain in Resend dashboard
- **Solution:** Or use `onboarding@resend.dev` for testing

#### 3. "Invalid API key"
- **Solution:** Check that the API key is correct (starts with `re_`)
- **Solution:** Make sure there are no extra spaces in the environment variable

#### 4. Emails not sending but no errors
- **Check:** Vercel function logs for `[send-email]` messages
- **Check:** Resend dashboard → **Logs** to see if emails were attempted
- **Check:** Make sure `ENABLE_EMAIL_SENDING=true` (exact string match)

### Testing Email on Vercel

1. **Submit the contact form** on your deployed site
2. **Check Vercel Function Logs:**
   - Look for `[send-email]` log messages
   - Should see "Email sent successfully" with an email ID
3. **Check Resend Dashboard:**
   - Go to Resend → **Emails** → **Logs**
   - You should see the email attempt and its status

### Debugging Steps

1. **Check Environment Variables:**
   ```bash
   # In Vercel function logs, you should see:
   [send-email] Env snapshot {
     enableEmailSending: true,
     hasApiKey: true,
     fromEmail: '...',
     toEmail: '...',
     vercel: true
   }
   ```

2. **If `enableEmailSending: false`:**
   - Check that `ENABLE_EMAIL_SENDING` is set to exactly `"true"` (case-sensitive)

3. **If `hasApiKey: false`:**
   - Check that `RESEND_API_KEY` is set correctly
   - Redeploy after adding the variable

4. **Check Resend Response:**
   - Look for `[send-email] Resend response` in logs
   - Should have an `id` field if successful
   - Check for `error` field if failed

## Quick Checklist

Before deploying to Vercel, ensure:

- [ ] Resend account created
- [ ] Resend API key generated
- [ ] `RESEND_API_KEY` added to Vercel environment variables
- [ ] `ENABLE_EMAIL_SENDING=true` added to Vercel
- [ ] `FROM_EMAIL` set (verified domain or `onboarding@resend.dev`)
- [ ] `TO_EMAIL` set to your receiving email
- [ ] Domain verified in Resend (if using custom domain)
- [ ] Project redeployed after adding variables
- [ ] Tested contact form submission
- [ ] Checked Vercel function logs
- [ ] Checked Resend email logs

## Support

If you're still having issues:

1. **Check Vercel Function Logs** - Look for `[send-email]` messages
2. **Check Resend Dashboard** - Look at email logs and domain status
3. **Verify Environment Variables** - Make sure all are set correctly
4. **Test with `onboarding@resend.dev`** - This doesn't require domain verification

For more details, see `EMAIL_SETUP.md` in the project root.

