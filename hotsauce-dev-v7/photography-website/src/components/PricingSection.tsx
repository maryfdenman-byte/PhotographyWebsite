import Link from 'next/link'

const payments = ['Cash', 'Credit Card', 'Venmo', 'Cash App', 'PayPal']

const sessionIncludes = [
  'Studio sessions at historic Taylors Mill',
  'Live viewing of your images as we shoot',
  'Original 1924 Mill settings as backdrops',
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#fbfaf8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-3 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            Investment
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#202a91]">Pricing</h1>
          <p className="mt-4 text-[#202a91]/50 text-sm">Simple, transparent pricing — no hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          <div className="bg-[#f4f3ee] p-10 border border-[#D3AF37]/20 flex flex-col">
            <p className="text-xs tracking-[0.3em] uppercase text-[#202a91]/40 mb-2">Individual Session Fee</p>
            <p className="text-5xl font-bold text-[#202a91] mb-2">$125</p>
            <p className="text-[#202a91]/60 text-sm leading-relaxed mb-6">
              Covers your full session — coaching, lighting, wardrobe guidance, and all the time you need to feel great.
            </p>
            <ul className="space-y-2 text-sm text-[#202a91]/70 mt-auto">
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> Professional coaching included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> Multiple outfit changes welcome
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#2f3fc0] via-[#202a91] to-[#0f1550] p-10 flex flex-col">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Per Image</p>
            <p className="text-5xl font-bold text-white mb-2">$125</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              You choose exactly which images you want, after you have seen them.
            </p>
            <ul className="space-y-2 text-sm text-white/70 mt-auto">
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> Professional retouching included
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D3AF37]">✓</span> Most clients select 2–5 images
              </li>
            </ul>
          </div>
        </div>

        {/* Corporate and on-location work is priced differently from an
            individual session: the fee covers Mary travelling to the client
            and setting up there, while images stay at the same rate. */}
        <div className="max-w-3xl mx-auto mt-8 bg-[#f4f3ee] border border-[#D3AF37]/20 p-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#202a91]/40 mb-2">Corporate &amp; On-Location</p>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
            <p className="text-5xl font-bold text-[#202a91]">$600</p>
            <p className="text-[#202a91]/60 text-sm">for up to three hours onsite, plus $125 per image</p>
          </div>
          <p className="text-[#202a91]/60 text-sm leading-relaxed">
            I bring the studio to your office anywhere in the Greenville area and photograph your whole team, coaching everyone through it. Images are the same $125 each, so each person chooses exactly how many they want.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 border border-[#D3AF37]/20 p-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[#202a91]/40 mb-6 text-center">
            Every session includes
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-[#202a91]/70">
            {sessionIncludes.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-[#D3AF37] leading-6">✓</span>
                <span>{item}</span>
              </div>
            ))}
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
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-[#202a91] text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md mr-4"
            >
              Book a Session
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-[#202a91]/50 text-sm tracking-wide underline underline-offset-4 hover:text-[#202a91] transition-colors"
            >
              Request a Custom Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
