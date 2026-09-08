export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fbfaf8] px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f4f3ee] -z-10" />
      <div className="absolute bottom-16 right-16 w-64 h-64 border border-[#D3AF37]/20 -z-10 hidden md:block" />
      <div className="absolute top-24 left-8 w-32 h-32 border border-[#D3AF37]/10 -z-10 hidden md:block" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-24">
        {/* Text */}
        <div>
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-6 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            Greenville &amp; Taylors, SC
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#202a91] mb-8">
            From Uncomfortable
            <br />
            <span className="italic font-light bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] bg-clip-text text-transparent">
              to Confident
            </span>
            <br />
            in One Session
          </h1>
          <p className="text-[#202a91]/60 text-lg leading-relaxed mb-10 max-w-md">
            Professional headshots that show the world who you really are — coached, comfortable, and confident.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-white text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-[#202a91] text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md"
            >
              Book a Session
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative hidden md:block">
          <div className="aspect-[3/4] w-full max-w-md ml-auto overflow-hidden bg-stone-100">
            <img
              src="/images/gallery/mary-denman-model-headshot-greenville-sc.jpg"
              alt="Model Headshot - Mary Denman Photography Greenville SC"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-full max-w-md h-full border border-[#D3AF37]/40 -z-10" />
        </div>
      </div>
    </section>
  )
}
