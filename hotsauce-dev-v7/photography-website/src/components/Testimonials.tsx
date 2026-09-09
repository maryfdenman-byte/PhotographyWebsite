const testimonials = [
  {
    quote:
      "I would highly recommend Mary. She has talent and it shows. It was very enjoyable to just be with her. She makes you feel very comfortable in front of the camera.",
    name: "Michelle Russ",
  },
  {
    quote:
      "Mary made it so easy for me to be myself in front of the camera. I now have photos that convey exactly the message I want others to see when I have to make a first impression.",
    name: "Rick Burris",
  },
  {
    quote:
      "Mary took the time to understand what I was looking for and empowered me to be myself. She was so kind and fun to work with. I couldn't be happier with my experience.",
    name: "Sam Eaton",
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
                <p className="text-[#202a91] font-semibold text-sm">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
