import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseBody = { ok: true } | { ok: false; error: string }

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'maryfdenman@gmail.com'
// Resend only delivers from a verified domain. Until mary's domain is verified,
// 'onboarding@resend.dev' works but will only deliver to the Resend account owner.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

const MAX_LENGTHS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  service: 100,
  message: 5000,
} as const

function isValidEmail(value: string) {
  // Deliberately permissive — the authoritative check is whether the reply lands.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function asString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  const body = (req.body ?? {}) as Record<string, unknown>

  // Honeypot: a real person never sees this field, so anything in it is a bot.
  // Return success so the bot does not learn it was filtered.
  if (asString(body.company) !== '') {
    return res.status(200).json({ ok: true })
  }

  const firstName = asString(body.firstName)
  const lastName = asString(body.lastName)
  const email = asString(body.email)
  const service = asString(body.service)
  const message = asString(body.message)

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ ok: false, error: 'Please fill in your name and email.' })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'That email address does not look right.' })
  }

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    const value = asString(body[field])
    if (value.length > limit) {
      return res.status(400).json({ ok: false, error: 'That message is too long to send.' })
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set — cannot send enquiry from', email)
    return res.status(500).json({
      ok: false,
      error: 'The contact form is not configured yet. Please email maryfdenman@gmail.com directly.',
    })
  }

  const fullName = `${firstName} ${lastName}`
  const lines = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Service: ${service || '(not specified)'}`,
    '',
    message || '(no message)',
  ]

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Mary Denman Photography <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New enquiry from ${fullName}${service ? ` — ${service}` : ''}`,
        text: lines.join('\n'),
        html: lines.map((line) => `<p>${escapeHtml(line) || '&nbsp;'}</p>`).join(''),
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('[contact] Resend rejected the send:', response.status, detail)
      return res.status(502).json({
        ok: false,
        error: 'Something went wrong sending your message. Please email maryfdenman@gmail.com directly.',
      })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact] Failed to reach Resend:', err)
    return res.status(502).json({
      ok: false,
      error: 'Something went wrong sending your message. Please email maryfdenman@gmail.com directly.',
    })
  }
}
