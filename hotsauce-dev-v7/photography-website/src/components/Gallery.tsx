import Image from 'next/image'

// Mosaic grid, filled column by column: a portrait fills a whole column height of
// two rows, a landscape pair stacks to fill the same space. The number of rows per
// breakpoint therefore sets the number of columns — 6 rows gives 2 columns on a
// phone, 4 rows gives 3 on a tablet, 2 rows gives the full 6 across on a desktop.
// Row height is 3/4 of a column's width at each breakpoint, so photos keep the same
// shape at every size: landscapes 4:3, portraits 2:3.
const photos = [
  { src: '/images/gallery/mary-denman-professional-headshot-taylors-sc.jpg',    label: 'Professional Headshot', category: 'Headshots',   orientation: 'portrait'  },
  { src: '/images/gallery/mary-denman-business-headshot-greenville-sc.jpg',      label: 'Business Headshot',     category: 'Corporate',   orientation: 'landscape' },
  { src: '/images/gallery/mary-denman-author-portrait-greenville-sc.jpg',        label: 'Author Portrait',       category: 'Portrait',    orientation: 'landscape' },
  { src: '/images/gallery/mary-denman-author-headshot-greenville-sc.jpg',        label: 'Author Headshot',       category: 'Portrait',    orientation: 'portrait'  },
  { src: '/images/gallery/mary-denman-actor-headshot-greenville-sc.jpg',         label: 'Actor Headshot',        category: 'Actor',       orientation: 'landscape' },
  { src: '/images/gallery/mary-denman-realtor-headshot-greenville-sc.jpg',       label: 'Realtor Headshot',      category: 'Corporate',   orientation: 'landscape' },
  { src: '/images/gallery/mary-denman-professional-headshots-greenville-sc.jpg', label: 'Professional Headshot', category: 'LinkedIn',    orientation: 'portrait'  },
  { src: '/images/gallery/mary-denman-doctor-headshot-greenville-sc.jpg',        label: 'Doctor Headshot',       category: 'Corporate',   orientation: 'landscape' },
  { src: '/images/gallery/mary-denman-corporate-headshots-greenville-sc.jpg',    label: 'Corporate Headshots',   category: 'Office Team', orientation: 'landscape' },
]

export default function Gallery() {
  return (
    <section id="portfolio" className="py-24">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-base tracking-[0.3em] uppercase font-bold mb-3 bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#202a91]">Portfolio</h2>
        </div>
        <p className="text-[#202a91]/50 max-w-sm text-sm leading-relaxed">
          Corporate headshots, actor portfolios, LinkedIn portraits, and more — all shot at Taylors Mill or on location in Greenville, SC.
        </p>
      </div>

      {/* Full-width image grid */}
      <div
        className="grid grid-flow-col auto-cols-fr gap-1
                   grid-rows-[repeat(6,37.5vw)]
                   md:grid-rows-[repeat(4,25vw)]
                   lg:grid-rows-[repeat(2,12.5vw)]"
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`overflow-hidden group relative cursor-pointer bg-stone-100 ${
              photo.orientation === 'portrait' ? 'row-span-2' : 'row-span-1'
            }`}
          >
            <Image
              src={photo.src}
              alt={`${photo.label} - Mary Denman Photography Greenville SC`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
              <p className="text-[#202a91] font-semibold tracking-wide text-sm">{photo.label}</p>
              <p className="text-xs tracking-widest uppercase bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
                {photo.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
