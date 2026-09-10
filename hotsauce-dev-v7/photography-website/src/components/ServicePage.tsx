import Image from 'next/image'
import Link from 'next/link'

// Layout shell for a service+location page. It carries no copy of its own —
// every word comes from the page that renders it, so two service pages share
// a look without sharing sentences. Near-duplicate service pages are the
// pattern Google filters out of local results, which is the whole reason
// these pages exist.
export interface ServiceSection {
  heading: string
  paragraphs: string[]
}

interface ServicePageProps {
  eyebrow: string
  h1: string
  lede: string
  photo: { src: string; alt: string }
  sections: ServiceSection[]
  gallery: { src: string; alt: string; label: string }[]
  closing: string
}

export default function ServicePage({ eyebrow, h1, lede, photo, sections, gallery, closing }: ServicePageProps) {
  return (
    <div className="pt-20">
      {/* Header + portrait */}
      <section className="bg-[#fbfaf8] px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-base tracking-[0.3em] uppercase font-bold mb-4 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
              {eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#202a91] mb-6">{h1}</h1>
            <p className="text-[#202a91]/65 text-lg leading-relaxed">{lede}</p>
            <Link
              href="/contact"
              className="inline-block mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-white text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md"
            >
              Book a Session
            </Link>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-stone-100">
            <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 768px) 100vw, 28rem" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-bold text-[#202a91] mb-4">{section.heading}</h2>
              <div className="space-y-4 text-[#202a91]/65 leading-relaxed">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photos */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((shot) => (
            <div key={shot.src} className="relative aspect-[3/4] overflow-hidden rounded-lg bg-stone-100">
              <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="bg-[#f4f3ee] px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#202a91]/70 text-lg leading-relaxed mb-8">{closing}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-white text-sm font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-md"
            >
              Book a Session
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 rounded-lg border border-[#202a91]/20 text-[#202a91] text-sm font-semibold tracking-widest uppercase hover:border-[#D3AF37] hover:text-[#D3AF37] transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
