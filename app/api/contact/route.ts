import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { NextResponse } from 'next/server'

const isDev = process.env.NODE_ENV === 'development'

export async function POST(req: Request) {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
  const toEmail = process.env.SES_TO_EMAIL
  const fromEmail = process.env.SES_FROM_EMAIL
  const region = process.env.AWS_REGION ?? 'us-east-1'

  if (!accessKeyId || !secretAccessKey || !toEmail || !fromEmail) {
    const missingEnv: string[] = []
    if (!accessKeyId) missingEnv.push('AWS_ACCESS_KEY_ID')
    if (!secretAccessKey) missingEnv.push('AWS_SECRET_ACCESS_KEY')
    if (!toEmail) missingEnv.push('SES_TO_EMAIL')
    if (!fromEmail) missingEnv.push('SES_FROM_EMAIL')
    console.error('Contact API: missing environment variables:', missingEnv.join(', '))
    return NextResponse.json(
      isDev
        ? {
            error: 'Server configuration error',
            missingEnv,
            hint: 'Copy .env.local.example to .env.local and fill in real values, then restart `npm run dev`.',
          }
        : { error: 'Server configuration error' },
      { status: 500 }
    )
  }

  const ses = new SESClient({
    region,
    credentials: { accessKeyId, secretAccessKey },
  })

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

  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName ?? ''}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service ?? 'N/A'}</p>
    <p><strong>Message:</strong><br/>${message ? message.replace(/\n/g, '<br/>') : 'N/A'}</p>
  `

  try {
    await ses.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: `[Contact Form] ${firstName} ${lastName ?? ''} - ${phone}` },
          Body: {
            Html: { Data: htmlBody },
            Text: {
              Data: `Name: ${firstName} ${lastName ?? ''}\nEmail: ${email}\nPhone: ${phone}\nService: ${service ?? 'N/A'}\nMessage: ${message ?? 'N/A'}`,
            },
          },
        },
      })
    )
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('SES error:', err)
    const detail = err instanceof Error ? err.message : String(err)
    return NextResponse.json(
      isDev ? { error: 'Failed to send email', detail } : { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
