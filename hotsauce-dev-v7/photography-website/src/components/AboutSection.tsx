export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f4f3ee]">
      {/* Bio section below */}
      <div className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-4 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#202a91]">
            Hello, I&apos;m
            <br />
            <span className="italic font-light">Mary Denman</span>
          </h2>
          <div className="space-y-4 text-[#202a91]/65 leading-relaxed text-sm md:text-base">
            <p>
              I&apos;m a Greenville, SC-based photographer specializing in headshots and portraits that help professionals, actors, and corporate teams show up with confidence.
            </p>
            <p>
              My philosophy is simple: I see the greatness already in you. My job is to bring it out. Whether you&apos;re camera-shy or a seasoned pro, I coach you through every step so you leave with images you&apos;re proud to share.
            </p>
            <p>
              I shoot at my studio at the historic Taylors Mill in Taylors, SC, and I&apos;m available on location for office and corporate team sessions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: '10+', label: 'Years' },
              { value: '500+', label: 'Sessions' },
              { value: '100%', label: 'Confident' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs tracking-widest uppercase text-[#202a91]/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-block mt-10 px-8 py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-white text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md"
          >
            Work With Me
          </a>
        </div>

        {/* Photo beside bio */}
        <div className="relative hidden md:block">
          <div className="aspect-[3/4] w-full max-w-md ml-auto overflow-hidden bg-stone-100 rounded-2xl">
            <img
              src="/images/about/mary-denman-headshot-photographer-greenville-sc.jpg"
              alt="Mary Denman - Professional Headshot Photographer Greenville SC"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full max-w-md h-full border border-[#D3AF37]/40 -z-10" />
        </div>
      </div>
    </section>
  )
}
