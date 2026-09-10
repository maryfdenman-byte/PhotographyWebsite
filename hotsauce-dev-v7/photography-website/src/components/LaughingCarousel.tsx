import Image from 'next/image'
import { useState } from 'react'

const slides = [
  { src: '/images/laughing/mary-denman-fun-headshot-session-greenville-sc.jpg', alt: 'Fun headshot session Greenville SC' },
  { src: '/images/laughing/mary-denman-relaxed-headshot-session-greenville-sc.jpg', alt: 'Relaxed headshot session Greenville SC' },
  { src: '/images/laughing/mary-denman-candid-headshot-session-greenville-sc.jpg', alt: 'Candid headshot session Greenville SC' },
  { src: '/images/laughing/mary-denman-laughing-man-headshot-greenville-sc.jpg', alt: 'Laughing man headshot Greenville SC' },
  { src: '/images/laughing/mary-denman-laughing-headshot-greenville-sc.jpg', alt: 'Laughing headshot Greenville SC' },
  { src: '/images/laughing/mary-denman-laughing-lady-headshot-greenville-sc.jpg', alt: 'Laughing lady headshot Greenville SC' },
]

const VISIBLE = 3

export default function LaughingCarousel() {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const visible = Array.from({ length: VISIBLE }, (_, i) => slides[(current + i) % total])

  return (
    <section className="py-10 bg-[#f4f3ee]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-3 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            The Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202a91]">Real Sessions, Real Joy</h2>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 justify-center">
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-[#202a91]/20 text-[#202a91] hover:border-[#D3AF37] hover:text-[#D3AF37] transition-colors flex-shrink-0"
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="flex gap-3 items-center justify-center min-h-[180px] flex-1 min-w-0 max-w-[664px]">
            {visible.map((slide, i) => (
              <div
                key={i}
                className={`relative overflow-hidden min-w-0 transition-all duration-300 ${
                  i === 1
                    ? 'basis-full sm:basis-[48%] max-w-xs aspect-[4/3]'
                    : 'hidden sm:block basis-[26%] max-w-[160px] aspect-[4/3]'
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-[#202a91]/20 text-[#202a91] hover:border-[#D3AF37] hover:text-[#D3AF37] transition-colors flex-shrink-0"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === current ? 'bg-[#D3AF37]' : 'bg-[#202a91]/20'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
