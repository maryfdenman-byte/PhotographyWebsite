import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const navLinks = [
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2f3fc0] via-[#202a91] to-[#0f1550] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="text-lg font-bold tracking-wide">Mary Denman</p>
              <p className="text-xs tracking-[0.3em] uppercase bg-gradient-to-r from-[#A07810] via-[#F5D060] to-[#A07810] bg-clip-text text-transparent">
                Photography
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional headshots in Taylors &amp; Greenville, SC. Coached. Confident. Camera-ready.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Contact</p>
            <div className="space-y-2 text-sm text-white/60">
              <p>
                <a href="mailto:maryfdenman@gmail.com" className="hover:text-white transition-colors">
                  maryfdenman@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:8643804905" className="hover:text-white transition-colors">
                  (864) 380-4905
                </a>
              </p>
              <p>250 Mill Street BL1225<br />Taylors, SC 29687</p>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/marydenmanphotography/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-[#D3AF37]/30 text-[#D3AF37] hover:text-[#F5D060] hover:border-[#F5D060] hover:bg-[#D3AF37]/10 transition-all"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/Mary-Denman-Photography-120963605132296/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center border border-[#D3AF37]/30 text-[#D3AF37] hover:text-[#F5D060] hover:border-[#F5D060] hover:bg-[#D3AF37]/10 transition-all"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/mary-denman-226918137"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-[#D3AF37]/30 text-[#D3AF37] hover:text-[#F5D060] hover:border-[#F5D060] hover:bg-[#D3AF37]/10 transition-all"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/30 text-xs tracking-wide">
          © {new Date().getFullYear()} Mary Denman Photography · Taylors, SC
        </div>
      </div>
    </footer>
  )
}
