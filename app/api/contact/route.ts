import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

const isDev = process.env.NODE_ENV === 'development'

export async function POST(req: Request) {
  const apiKey = process.env.SENDGRID_API_KEY?.trim()
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim()
  const fromEmail = process.env.SENDGRID_FROM_EMAIL?.trim()

  if (!apiKey || !toEmail || !fromEmail) {
    const missingEnv: string[] = []
    if (!apiKey) missingEnv.push('SENDGRID_API_KEY')
    if (!fromEmail) missingEnv.push('SENDGRID_FROM_EMAIL')
    if (!toEmail) missingEnv.push('CONTACT_TO_EMAIL')
    console.error('Contact API: missing:', missingEnv.join(', '))
    return NextResponse.json(
      {
        error: 'Server configuration error',
        missingEnv,
        ...(isDev
          ? {
              hint: '在 .env.local / Vercel 配置 SENDGRID_API_KEY、SENDGRID_FROM_EMAIL（SendGrid 已验证发件人）、CONTACT_TO_EMAIL（收件人），保存后 Redeploy。',
            }
          : {}),
      },
      { status: 500 }
    )
  }

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { firstName, lastName, email, phone, service, message } = body

  if (!firstName || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const subject = 'New Message from Website'
  const textBody = `Name: ${firstName} ${lastName ?? ''}\nEmail: ${email}\nPhone: ${phone}\nService: ${service ?? 'N/A'}\nMessage: ${message ?? 'N/A'}`
  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName ?? ''}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service ?? 'N/A'}</p>
    <p><strong>Message:</strong><br/>${message ? message.replace(/\n/g, '<br/>') : 'N/A'}</p>
  `

  sgMail.setApiKey(apiKey)

  try {
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    const detail =
      err && typeof err === 'object' && 'response' in err
        ? JSON.stringify((err as { response?: { body?: unknown } }).response?.body ?? err)
        : err instanceof Error
          ? err.message
          : String(err)
    console.error('SendGrid error:', detail, err)
    return NextResponse.json(
      isDev
        ? {
            error: 'Failed to send email',
            detail,
            hint: '在 SendGrid 控制台验证发件人（Single Sender 或 Domain Authentication），并确认 SENDGRID_FROM_EMAIL 与之一致。',
          }
        : { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
