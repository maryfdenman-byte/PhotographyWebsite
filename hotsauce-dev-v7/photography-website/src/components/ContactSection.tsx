import { useState } from 'react'

const services = [
  'Professional Headshots',
  'Corporate / Team Headshots',
  'Actor Headshots',
  'Author / Speaker Portraits',
  'LinkedIn Portraits',
  'Branding Photography',
  'Other',
]

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '9am – 5pm' },
  { day: 'Wednesday', time: '9–11am, 3–5pm' },
  { day: 'Thursday', time: '9am – 5pm' },
  { day: 'Friday', time: '9am – 5pm' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
]

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  service: '',
  message: '',
  company: '', // honeypot — hidden from real visitors
}

const inputClass =
  'w-full px-4 py-3 bg-white border border-[#202a91]/10 text-[#202a91] text-sm focus:outline-none focus:border-[#D3AF37] transition-colors'
const labelClass = 'block text-xs tracking-widest uppercase text-[#202a91]/40 mb-2'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  function update(field: keyof typeof emptyForm) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.ok) {
        setError(data.error || 'Something went wrong. Please email maryfdenman@gmail.com directly.')
        setStatus('error')
        return
      }

      setForm(emptyForm)
      setStatus('success')
    } catch {
      setError('Could not reach the server. Please check your connection, or email maryfdenman@gmail.com directly.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#f4f3ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-3 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#202a91]">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-10">
              <div>
                <p className="text-xs tracking-widest uppercase text-[#202a91]/40 mb-1">Email</p>
                <a href="mailto:maryfdenman@gmail.com" className="text-[#202a91] hover:text-[#D3AF37] transition-colors">
                  maryfdenman@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-[#202a91]/40 mb-1">Phone</p>
                <a href="tel:8643804905" className="text-[#202a91] hover:text-[#D3AF37] transition-colors">
                  (864) 380-4905
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-[#202a91]/40 mb-1">Studio</p>
                <p className="text-[#202a91]">
                  250 Mill Street BL1225<br />
                  Taylors, SC 29687
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-[#202a91]/40 mb-4">Hours</p>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-[#202a91]/60">{h.day}</span>
                    <span className="text-[#202a91]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-[#202a91] mb-2">Message Sent!</h3>
                <p className="text-[#202a91]/60 text-sm">I&apos;ll be in touch within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={update('firstName')}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={update('lastName')}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="service" className={labelClass}>Service</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={update('service')}
                    className={inputClass}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Honeypot — hidden from people, tempting to bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={update('company')}
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-white text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
