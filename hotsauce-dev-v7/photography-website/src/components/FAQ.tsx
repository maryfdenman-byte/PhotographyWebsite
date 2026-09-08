import { useState } from 'react'

const faqs = [
  {
    q: 'Why do I need professional headshots?',
    a: 'Your headshot is often the first impression you make online — on LinkedIn, your website, press materials, and more. A professional image communicates credibility, confidence, and approachability before you say a word.',
  },
  {
    q: 'What types of sessions do you offer?',
    a: 'I specialize in professional headshots, corporate headshots, actor headshots, author portraits, LinkedIn portraits, and branding photography. I also offer on-location sessions for office teams.',
  },
  {
    q: 'Can you come to our office?',
    a: 'Yes! I offer on-location sessions for corporate teams and offices throughout the Greenville, SC area. Contact me for a custom quote.',
  },
  {
    q: 'What should I wear?',
    a: 'Wear something that makes you feel confident and professional. Solid colors tend to photograph better than busy patterns. Bring a couple of outfit options and we can choose together.',
  },
  {
    q: 'Where is your studio?',
    a: 'My studio is at the historic Taylors Mill, 250 Mill Street BL1225, Taylors, SC 29687 — a beautiful, creative space with great natural light.',
  },
  {
    q: 'How do I pay?',
    a: 'I accept Cash, Credit Card, Venmo, Cash App, and PayPal. Payment is due at the time of your session.',
  },
  {
    q: 'How many images will I receive?',
    a: 'The session fee covers the shoot itself. Images are priced at $125 each, so you choose exactly how many you want. Most clients select 2–5 images.',
  },
  {
    q: "What if I'm camera shy?",
    a: "That's my specialty! I coach every client through the session — no posing experience required. Most people are surprised by how comfortable and fun the experience is.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-[#fbfaf8]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-3 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#202a91]">FAQ</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#202a91]/10">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-[#202a91] font-medium text-sm"
              >
                <span>{faq.q}</span>
                <span className="ml-4 flex-shrink-0 text-[#D3AF37] text-lg leading-none">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-[#202a91]/65 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
