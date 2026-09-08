# Photography Website — Build Progress

**Project location:** `/Users/marydenman/documents/claude website/hotsauce-dev-v7/photography-website`
**Stack:** Next.js 15 (Pages Router) + Tailwind CSS 4 + pnpm
**Dev server:** `pnpm run dev` → `http://localhost:3100`
**Deployment target:** Vercel

> All work — code, images, copy, videos, QR codes — lives under:
> `/Users/marydenman/documents/claude website/`

---

## Page Structure (multi-page site)

| Page | URL | Sections |
|---|---|---|
| Home | `/` | Hero, Gallery, Process, Testimonials, LaughingCarousel |
| About | `/about` | AboutSection |
| Pricing | `/pricing` | PricingSection, FAQ |
| Contact | `/contact` | ContactSection |

---

## Component List

| Component | File | Notes |
|---|---|---|
| Header | `src/components/Header.tsx` | Sticky, transparent → white on scroll, mobile hamburger, Book Now button |
| Footer | `src/components/Footer.tsx` | Mary's real contact info, nav, social placeholders |
| Hero | `src/components/Hero.tsx` | Full-viewport, tagline, photo right, two CTAs |
| Gallery | `src/components/Gallery.tsx` | Masonry grid, 10 curated headshots, hover overlays |
| Process | `src/components/Process.tsx` | 3-step: Schedule → Get Coached → Walk Away Confident |
| Testimonials | `src/components/Testimonials.tsx` | Michelle Russ, Rick Burris, Sam Eaton (real quotes) |
| LaughingCarousel | `src/components/LaughingCarousel.tsx` | 3-image sliding carousel, dot indicators |
| FAQ | `src/components/FAQ.tsx` | 8 questions, accordion style |
| AboutSection | `src/components/AboutSection.tsx` | Two-column, Mary's photo, stats, bio, CTA |
| PricingSection | `src/components/PricingSection.tsx` | $125 session + $125/image cards, payment methods |
| ContactSection | `src/components/ContactSection.tsx` | Contact form, real info, business hours |
| Layout | `src/components/Layout.tsx` | Wraps all pages, handles SEO via next-seo |

---

## Color Palette

| Role | Hex | Usage |
|---|---|---|
| Blue (primary) | `#202a91` | Headings, body text, nav |
| Blue gradient | `#2f3fc0` → `#202a91` → `#0f1550` | Footer background, pricing feature card |
| Gold (accent) | `#D3AF37` | Base gold |
| Gold gradient | `#A07810` → `#D3AF37` → `#F5D060` | Buttons, labels, highlights |
| Gold gradient (hover) | `#B8960C` → `#E5C85A` → `#F5D060` | Hover state on every gold button |
| Background | `#fbfaf8` | Main page background (warm off-white) |
| Section alt bg | `#f4f3ee` | About, Process, Carousel, Contact, Testimonials backgrounds |

### Gold Gradient (metallic sheen)
```
bg-gradient-to-r from-[#A07810] via-[#D3AF37] to-[#F5D060]
```
For text: add `bg-clip-text text-transparent`

### Blue Gradient
```
bg-gradient-to-br from-[#2f3fc0] via-[#202a91] to-[#0f1550]
```
Used by `Footer.tsx` and the highlighted card in `PricingSection.tsx`.

---

## Real Content

- **Name:** Mary Denman
- **Location:** Taylors, SC — studio at historic Taylors Mill
- **Studio address:** 250 Mill Street BL1225, Taylors, SC 29687
- **Phone:** (864) 380-4905
- **Email:** maryfdenman@gmail.com
- **Tagline:** "From Uncomfortable to Confident in One Session"
- **Hours:** By appointment (closed Sunday)
- **Services:** Corporate, Actor, LinkedIn, Office/Team Headshots, Portraits, On-Location, Branding, Events
- **Pricing:** $125 session fee + $125 per finished image
- **Payments:** Cash, Credit Card, Venmo, Cash App, PayPal

---

## Images

All images live in `public/images/` within the project:

| Folder | Contents |
|---|---|
| `public/images/about/` | Mary's portrait + Taylors Mill studio photo (2 files) |
| `public/images/gallery/` | 10 curated headshots used in Portfolio section |
| `public/images/laughing/` | 6 laughing/candid session photos for carousel |
| `public/images/` (root) | 66 additional client/stock headshots, SEO-renamed |

### Naming convention:
`mary-denman-[type]-[description]-[location].jpg`

---

## To Do

- [ ] Wire up contact form to real email service (Resend or Formspree recommended)
- [ ] Add real social media URLs to Header and Footer (currently `#`)
- [ ] Add studio photo to About page (`public/images/about/mary-denman-photography-studio-taylors-mill.jpg`)
- [ ] Deploy to Vercel: run `vercel` from project root
- [ ] Add real social links (Instagram, Facebook)

---

## Dev Commands

```bash
cd "/Users/marydenman/documents/claude website/hotsauce-dev-v7/photography-website"
pnpm run dev        # → http://localhost:3100
pnpm run build      # verify clean build before deploying
pnpm run dev:stable # monitored dev with auto-recovery
```
