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
    const { name, email, phone, company, projectType, message } = body;

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
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email sending is enabled and Resend is configured
    if (enableEmailSending && resend && process.env.RESEND_API_KEY) {
      try {
        // Send email using Resend
        const html = generateEmailTemplate({
          name,
          email,
          phone,
          company,
          projectType,
          message
        });

        console.log('[send-email] Prepared payload', {
          from: fromEmail,
          to: toEmail,
          replyTo: email,
          subject: `New Customer Enquiry - ${projectType}`,
          htmlLength: html.length,
        });

        const emailData = await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          replyTo: email,
          subject: `New Customer Enquiry - ${projectType}`,
          html
        });

        console.log('[send-email] Resend response', emailData);
      } catch (emailError) {
        // Log as much context as possible without leaking secrets
        console.error('[send-email] Error sending email', {
          message: (emailError as any)?.message,
          name: (emailError as any)?.name,
          statusCode: (emailError as any)?.error?.statusCode,
          resendError: (emailError as any)?.error,
        });
        // Don't fail the request if email fails, just log it
      }
    } else if (enableEmailSending) {
      console.log('[send-email] Email sending enabled but Resend not configured', {
        hasApiKey,
        resendInitialized: Boolean(resend),
      });
    }

    // Log the submission
    console.log('[send-email] Contact form submission', {
      name,
      email,
      phone,
      company,
      projectType,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('[send-email] Error processing contact form', {
      message: (error as any)?.message,
      name: (error as any)?.name,
      stack: (error as any)?.stack,
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

