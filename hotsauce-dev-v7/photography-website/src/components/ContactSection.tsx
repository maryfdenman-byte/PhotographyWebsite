import { useState } from 'react'

const services = [
  'Professional Headshots',
  'Corporate / Team Headshots',
  'Actor Headshots',
  'Author / Speaker Portraits',
  'LinkedIn Portraits',
  'Branding Photography',
  'Event Photography',
  'Other',
]

const hours = [
  { day: 'Monday', time: 'By Appointment' },
  { day: 'Tuesday', time: 'By Appointment' },
  { day: 'Wednesday', time: 'By Appointment' },
  { day: 'Thursday', time: 'By Appointment' },
  { day: 'Friday', time: 'By Appointment' },
  { day: 'Saturday', time: 'By Appointment' },
  { day: 'Sunday', time: 'Closed' },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
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
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-[#202a91] mb-2">Message Sent!</h3>
                <p className="text-[#202a91]/60 text-sm">I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#202a91]/40 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#202a91]/10 text-[#202a91] text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#202a91]/40 mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#202a91]/10 text-[#202a91] text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#202a91]/40 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-[#202a91]/10 text-[#202a91] text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#202a91]/40 mb-2">Service</label>
                  <select
                    className="w-full px-4 py-3 bg-white border border-[#202a91]/10 text-[#202a91] text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#202a91]/40 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-[#202a91]/10 text-[#202a91] text-sm focus:outline-none focus:border-[#D3AF37] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-white text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
