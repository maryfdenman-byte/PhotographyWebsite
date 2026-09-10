import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const nav = [
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

// Stubbed headshot categories for the Headshots dropdown. Photos are real files
// from public/images; every href points at the portfolio anchor until each
// category gets its own page.
const headshots = [
  { label: 'Corporate', src: '/images/mary-denman-corporate-headshot-greenville-sc.jpg',        href: '/#portfolio' },
  { label: 'Author',    src: '/images/mary-denman-author-headshot-greenville-sc.jpg',           href: '/#portfolio' },
  { label: 'Doctor',    src: '/images/mary-denman-doctor-headshot-greenville-sc.jpg',           href: '/#portfolio' },
  { label: 'Duo',       src: '/images/mary-denman-duo-headshot-greenville-sc-harry-cindy.jpg',  href: '/#portfolio' },
  { label: 'Fun',       src: '/images/mary-denman-fun-headshot-greenville-sc.jpg',              href: '/#portfolio' },
  { label: 'Model',     src: '/images/mary-denman-model-headshot-greenville-sc.jpg',            href: '/#portfolio' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [headshotsOpen, setHeadshotsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/mary-denman-photography-logo-blue.png"
            alt="Mary Denman Photography"
            width={700}
            height={150}
            priority
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <div key={item.name} className="contents">
              <Link
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  router.pathname === item.href.split('#')[0] && item.href !== '/#portfolio'
                    ? 'text-[#D3AF37]'
                    : 'text-[#202a91]/70 hover:text-[#202a91]'
                }`}
              >
                {item.name}
              </Link>

              {/* Headshots dropdown sits right after Portfolio */}
              {item.name === 'Portfolio' && (
                <div
                  onMouseEnter={() => setHeadshotsOpen(true)}
                  onMouseLeave={() => setHeadshotsOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm tracking-wide transition-colors text-[#202a91]/70 hover:text-[#202a91]"
                    /* hover already opens the panel, so a click only ever opens it —
                       toggling here would close it the instant it was hovered open */
                    onClick={() => setHeadshotsOpen(true)}
                    aria-expanded={headshotsOpen}
                  >
                    Headshots
                    <span className={`text-[10px] transition-transform ${headshotsOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>

                  {/* Photo panel, absolutely positioned so it never shifts the bar */}
                  {headshotsOpen && (
                    <div className="absolute left-0 right-0 top-full bg-white/98 backdrop-blur-sm border-t border-[#202a91]/10 shadow-lg px-6 py-6">
                      <div className="grid grid-cols-6 gap-4">
                        {headshots.map((shot) => (
                          <Link
                            key={shot.label}
                            href={shot.href}
                            className="group block"
                            onClick={() => setHeadshotsOpen(false)}
                          >
                            <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-[#202a91]/5">
                              <Image
                                src={shot.src}
                                alt={`${shot.label} headshot by Mary Denman Photography`}
                                fill
                                sizes="200px"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <p className="mt-2 text-xs tracking-wide text-[#202a91]/70 group-hover:text-[#202a91]">
                              {shot.label}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-[#202a91] text-xs font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-sm"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#202a91] transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#202a91] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#202a91] transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-[#202a91]/10 px-6 py-4 space-y-3">
          {nav.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="block text-sm text-[#202a91]/70 hover:text-[#202a91] py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>

              {/* Headshots thumbnails, expandable, right after Portfolio */}
              {item.name === 'Portfolio' && (
                <>
                  <button
                    className="flex items-center gap-1 w-full text-left text-sm text-[#202a91]/70 hover:text-[#202a91] py-1"
                    onClick={() => setHeadshotsOpen(!headshotsOpen)}
                    aria-expanded={headshotsOpen}
                  >
                    Headshots
                    <span className={`text-[10px] transition-transform ${headshotsOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>
                  {headshotsOpen && (
                    <div className="grid grid-cols-3 gap-3 py-2">
                      {headshots.map((shot) => (
                        <Link
                          key={shot.label}
                          href={shot.href}
                          className="block"
                          onClick={() => {
                            setHeadshotsOpen(false)
                            setMenuOpen(false)
                          }}
                        >
                          <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-[#202a91]/5">
                            <Image
                              src={shot.src}
                              alt={`${shot.label} headshot by Mary Denman Photography`}
                              fill
                              sizes="200px"
                              className="object-cover"
                            />
                          </div>
                          <p className="mt-1 text-xs text-[#202a91]/70">{shot.label}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="block mt-2 px-5 py-2 rounded-lg text-center bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060] text-[#202a91] text-xs font-semibold tracking-widest uppercase hover:from-[#B8960C] hover:via-[#E5C85A] hover:to-[#F5D060] transition-all shadow-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
