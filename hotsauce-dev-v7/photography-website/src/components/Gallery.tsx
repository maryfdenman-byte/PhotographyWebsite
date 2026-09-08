// Grid: 6 columns × 2 rows at 200px = 400px total height
// Portrait images (col 1, 3, 5) span both rows. Landscape pairs fill cols 2, 4, 6.
const photos = [
  // Portrait — col 1, spans both rows
  { src: '/images/gallery/mary-denman-professional-headshot-taylors-sc.jpg',    label: 'Professional Headshot', category: 'Headshots',   col: 1, rowStart: 1, rowSpan: 2 },
  // Landscape pair — col 2
  { src: '/images/gallery/mary-denman-business-headshot-greenville-sc.jpg',      label: 'Business Headshot',     category: 'Corporate',   col: 2, rowStart: 1, rowSpan: 1 },
  { src: '/images/gallery/mary-denman-author-portrait-greenville-sc.jpg',        label: 'Author Portrait',       category: 'Portrait',    col: 2, rowStart: 2, rowSpan: 1 },
  // Portrait — col 3, spans both rows
  { src: '/images/gallery/mary-denman-author-headshot-greenville-sc.jpg',        label: 'Author Headshot',       category: 'Portrait',    col: 3, rowStart: 1, rowSpan: 2 },
  // Landscape pair — col 4
  { src: '/images/gallery/mary-denman-actor-headshot-greenville-sc.jpg',         label: 'Actor Headshot',        category: 'Actor',       col: 4, rowStart: 1, rowSpan: 1 },
  { src: '/images/gallery/mary-denman-realtor-headshot-greenville-sc.jpg',       label: 'Realtor Headshot',      category: 'Corporate',   col: 4, rowStart: 2, rowSpan: 1 },
  // Portrait — col 5, spans both rows
  { src: '/images/gallery/mary-denman-professional-headshots-greenville-sc.jpg', label: 'Professional Headshot', category: 'LinkedIn',    col: 5, rowStart: 1, rowSpan: 2 },
  // Landscape pair — col 6
  { src: '/images/gallery/mary-denman-doctor-headshot-greenville-sc.jpg',        label: 'Doctor Headshot',       category: 'Corporate',   col: 6, rowStart: 1, rowSpan: 1 },
  { src: '/images/gallery/mary-denman-corporate-headshots-greenville-sc.jpg',    label: 'Corporate Headshots',   category: 'Office Team', col: 6, rowStart: 2, rowSpan: 1 },
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
        className="grid grid-cols-6 gap-1"
        style={{ gridTemplateRows: 'repeat(2, 200px)' }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className="overflow-hidden group relative cursor-pointer bg-stone-100"
            style={{
              gridColumn: photo.col,
              gridRow: `${photo.rowStart} / span ${photo.rowSpan}`,
            }}
          >
            <img
              src={photo.src}
              alt={`${photo.label} - Mary Denman Photography Greenville SC`}
              className="w-full h-full object-cover"
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
