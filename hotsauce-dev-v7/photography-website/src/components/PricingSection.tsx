const payments = ['Cash', 'Credit Card', 'Venmo', 'Cash App', 'PayPal']

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#fbfaf8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-3 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            Investment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#202a91]">Pricing</h2>
          <p className="mt-4 text-[#202a91]/50 text-sm">Simple, transparent pricing — no hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-[#f4f3ee] p-10 border border-[#D3AF37]/20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#202a91]/40 mb-2">Session Fee</p>
            <p className="text-5xl font-bold text-[#202a91] mb-2">$125</p>
            <p className="text-[#202a91]/60 text-sm leading-relaxed mb-6">
              Covers your full session — coaching, lighting, wardrobe guidance, and all the time you need to feel great.
            </p>
            <ul className="space-y-2 text-sm text-[#202a91]/70">
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> Studio sessions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> Professional coaching included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> Multiple outfit changes welcome
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#2f3fc0] via-[#202a91] to-[#0f1550] p-10">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Per Image</p>
            <p className="text-5xl font-bold text-white mb-2">$125</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              You choose only the images you love. Most clients select 2–5 images. All images fully retouched and delivered digitally.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> Professional retouching included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> High-resolution digital delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> No minimum purchase required
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[#202a91]/50 text-sm mb-2">Accepted payments</p>
          <div className="flex flex-wrap justify-center gap-3">
            {payments.map((p) => (
              <span key={p} className="px-3 py-1 border border-[#202a91]/15 text-[#202a91]/50 text-xs tracking-wide">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-[#202a91] text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md mr-4"
            >
              Book a Session
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 text-[#202a91]/50 text-sm tracking-wide underline underline-offset-4 hover:text-[#202a91] transition-colors"
            >
              Request a Custom Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
