import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Simple email sender using Resend's HTTP API.
// To enable, create RESEND_API_KEY in your environment.

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName = '',
      lastName = '',
      company = '',
      role = '',
      email = '',
      phone = '',
      inquiry = ''
    } = body || {}

    if (!firstName || !company || !email || !inquiry) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = 'timlillyman94@gmail.com'
    const subject = `New Inquiry from ${firstName} ${lastName}`
    const html = `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Inquiry:</strong><br/>${inquiry.replace(/\n/g, '<br/>')}</p>
    `

    if (!apiKey) {
      // Fallback: log on server so submission isn't lost during local dev
      console.log('Email submission (no RESEND_API_KEY set):', { firstName, lastName, company, role, email, phone, inquiry })
      return NextResponse.json({ 
        ok: true, 
        note: 'Email not sent (missing RESEND_API_KEY). Logged to server console. Please set RESEND_API_KEY in .env.local file.',
        debug: { firstName, lastName, company, role, email, phone, inquiry }
      })
    }

    const resend = new Resend(apiKey)
    const sendResult = await resend.emails.send({
      from: 'Tim via Site <onboarding@resend.dev>',
      to: [to],
      subject,
      html
    })

    if ((sendResult as any).error) {
      console.error('Resend error:', (sendResult as any).error)
      return NextResponse.json({ 
        error: 'Failed to send email', 
        details: (sendResult as any).error,
        debug: { firstName, lastName, company, role, email, phone, inquiry }
      }, { status: 500 })
    }

    console.log('Email sent successfully:', { firstName, lastName, company, role, email, phone, inquiry })
    return NextResponse.json({ ok: true, message: 'Email sent successfully' })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}


