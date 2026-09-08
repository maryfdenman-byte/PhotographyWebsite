const steps = [
  {
    number: '01',
    title: 'Schedule',
    description: 'Pick a date that works for you — studio sessions at Taylors Mill or on location at your office.',
  },
  {
    number: '02',
    title: 'Get Coached',
    description: "I guide you through every pose and expression. Camera shy? That's my specialty. No experience needed.",
  },
  {
    number: '03',
    title: 'Walk Away Confident',
    description: "Leave with images you're proud to share — on LinkedIn, your website, press materials, and beyond.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#f4f3ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-3 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#202a91]">The Process</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-[#D3AF37]/30" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#fbfaf8] border border-[#D3AF37]/30">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#202a91] mb-3">{step.title}</h3>
              <p className="text-[#202a91]/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-[#202a91] text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  )
}
