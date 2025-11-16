import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateEmailTemplate } from '@/lib/emailTemplate';

// Ensure this API runs on Node.js runtime on Vercel (not Edge) so env and SDKs work reliably
export const runtime = 'nodejs';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, name, email, phone, company, projectType, message } = body;

    // Runtime and env snapshot for troubleshooting (no secrets printed)
    const enableEmailSending = process.env.ENABLE_EMAIL_SENDING === 'true';
    const hasApiKey = Boolean(process.env.RESEND_API_KEY);
    const fromEmail = process.env.FROM_EMAIL || 'noreply@omvconstructions.in';
    const toEmail = process.env.TO_EMAIL || 'prabupep@gmail.com';
    console.log('[send-email] Env snapshot', {
      enableEmailSending,
      hasApiKey,
      fromEmail,
      toEmail,
      nodeEnv: process.env.NODE_ENV,
      vercel: Boolean(process.env.VERCEL),
    });

    // Validate required fields
    if (!firstName || !name || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate Indian phone number format
    // Accepts: +91XXXXXXXXXX, 0XXXXXXXXXX, or XXXXXXXXXX (10 digits starting with 6-9)
    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format. Please enter a valid Indian phone number (10 digits starting with 6-9)' },
        { status: 400 }
      );
    }

    // Validate email format if provided (email is optional)
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Check if email sending is enabled and Resend is configured
    let emailSent = false;
    let emailError: string | null = null;

    if (enableEmailSending && resend && process.env.RESEND_API_KEY) {
      try {
        // Combine firstName and lastName for full name
        const fullName = `${firstName} ${name}`.trim();
        
        // Send email using Resend
        const html = generateEmailTemplate({
          name: fullName,
          email,
          phone,
          company,
          projectType,
          message
        });

        const emailSubject = `New Customer Enquiry from ${firstName} - ${projectType}`;
        
        // Prepare email payload - replyTo is optional if email is not provided
        const emailPayload: {
          from: string;
          to: string[];
          subject: string;
          html: string;
          replyTo?: string;
        } = {
          from: fromEmail,
          to: [toEmail],
          subject: emailSubject,
          html
        };
        
        // Only add replyTo if email is provided
        if (email) {
          emailPayload.replyTo = email;
        }
        
        console.log('[send-email] Prepared payload', {
          from: fromEmail,
          to: toEmail,
          replyTo: email || 'not provided',
          subject: emailSubject,
          htmlLength: html.length,
        });

        const emailData = await resend.emails.send(emailPayload);

        // Log full response for debugging (without sensitive data)
        console.log('[send-email] Resend response', JSON.stringify({
          hasData: Boolean(emailData?.data),
          hasError: Boolean(emailData?.error),
          dataId: emailData?.data?.id,
          errorMessage: emailData?.error?.message,
        }));

        // Check for errors in response
        if (emailData?.error) {
          const errorMsg = emailData.error.message || 'Unknown email error';
          emailError = `Resend API error: ${errorMsg}`;
          console.error('[send-email] Resend API returned error', {
            message: emailData.error.message,
            name: emailData.error.name,
          });
        } else if (emailData?.data?.id) {
          emailSent = true;
          console.log('[send-email] Email sent successfully', { 
            emailId: emailData.data.id,
          });
        } else {
          // Unexpected response format
          emailError = 'Unexpected response from Resend API';
          console.error('[send-email] Unexpected Resend response format', emailData);
        }
      } catch (err) {
        // Log as much context as possible without leaking secrets
        const error = err as { message?: string; name?: string; error?: { message?: string; statusCode?: number } };
        emailError = error?.message || error?.error?.message || 'Failed to send email';
        console.error('[send-email] Error sending email', {
          message: error?.message,
          name: error?.name,
          statusCode: error?.error?.statusCode,
          resendError: error?.error,
        });
      }
    } else if (enableEmailSending) {
      emailError = 'Email sending enabled but Resend API key not configured';
      console.warn('[send-email] Email sending enabled but Resend not configured', {
        hasApiKey,
        resendInitialized: Boolean(resend),
        enableEmailSending,
      });
    } else {
      console.log('[send-email] Email sending is disabled (ENABLE_EMAIL_SENDING is not "true")');
    }

    // Log the submission
    console.log('[send-email] Contact form submission', {
      firstName,
      lastName: name,
      fullName: `${firstName} ${name}`.trim(),
      email: email || 'not provided',
      phone: cleanPhone,
      company,
      projectType,
      message,
      emailSent,
      emailError,
      timestamp: new Date().toISOString()
    });

    // Return response based on email sending status
    if (enableEmailSending && !emailSent && emailError) {
      // If email was supposed to be sent but failed, return error
      console.error('[send-email] Email sending failed', { emailError });
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send email notification. Please contact us directly.',
          emailError: process.env.NODE_ENV === 'development' ? emailError : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: emailSent ? 'Message sent successfully' : 'Message received successfully',
        emailSent
      },
      { status: 200 }
    );

  } catch (error) {
    const err = error as { message?: string; name?: string; stack?: string };
    console.error('[send-email] Error processing contact form', {
      message: err?.message,
      name: err?.name,
      stack: err?.stack,
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

