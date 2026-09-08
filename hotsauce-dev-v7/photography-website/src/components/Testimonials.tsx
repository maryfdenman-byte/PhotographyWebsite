const testimonials = [
  {
    quote:
      "Mary made me feel so comfortable in front of the camera. I was so nervous going in, but she coached me through every shot. I absolutely love my headshots and have gotten so many compliments on them!",
    name: "Michelle Russ",
    title: "Marketing Professional",
  },
  {
    quote:
      "I've had headshots done before, but nothing like this. Mary has a gift for bringing out the best in people. My new headshots look natural, professional, and like the best version of me.",
    name: "Rick Burris",
    title: "Business Executive",
  },
  {
    quote:
      "Mary is incredibly talented and so easy to work with. She made the whole session fun and stress-free. My headshots exceeded every expectation I had.",
    name: "Sam Eaton",
    title: "Author & Speaker",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#fbfaf8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-3 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            Client Love
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#202a91]">What They Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#f4f3ee] p-8 relative">
              <span className="absolute top-4 left-6 text-5xl font-serif leading-none bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
                &ldquo;
              </span>
              <p className="text-[#202a91]/70 text-sm leading-relaxed mt-6 mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A07810] via-[#D3AF37] to-[#F5D060] flex items-center justify-center text-white text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[#202a91] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#202a91]/40 text-xs tracking-wide">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
