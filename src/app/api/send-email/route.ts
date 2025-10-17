import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateEmailTemplate } from '@/lib/emailTemplate';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

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
    const enableEmailSending = process.env.ENABLE_EMAIL_SENDING === 'true';
    
    if (enableEmailSending && resend && process.env.RESEND_API_KEY) {
      try {
        // Send email using Resend
        const emailData = await resend.emails.send({
          from: process.env.FROM_EMAIL || 'noreply@omvconstructions.in',
          to: [process.env.TO_EMAIL || 'prabupep@gmail.com'],
          replyTo: email,
          subject: `New Customer Enquiry - ${projectType}`,
          html: generateEmailTemplate({
            name,
            email,
            phone,
            company,
            projectType,
            message
          })
        });

        console.log('Email sent successfully:', emailData);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Don't fail the request if email fails, just log it
      }
    } else if (enableEmailSending) {
      console.log('Email sending is enabled but Resend API key is not configured');
    }

    // Log the submission
    console.log('Contact form submission:', {
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
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

