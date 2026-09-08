# Mary Denman Photography — Website

This folder holds everything for the **Mary Denman Photography** website: the site
code itself, plus the raw material it's built from (logos, headshot images, design
notes, QR codes) and a written record of every Claude Code session that shaped it.

Mary is a professional headshot photographer in Taylors, SC, working out of a
studio at the historic Taylors Mill. The site is being built to replace her
existing web presence.

**Status:** built and running locally at <http://localhost:3100>. Not yet deployed.

If you just want to see the site on your screen, read **[STARTUP.md](STARTUP.md)** —
it walks through it step by step. This file explains what everything *is*.

---

## What's in here

| Folder / file | What it holds |
|---|---|
| `hotsauce-dev-v7/photography-website/` | **The website itself.** Next.js app — all code, images and videos. |
| `hotsauce-dev-v7/CLAUDE.md` | Technical spec for the dev environment — stack choices, versions, project rules. |
| `Stored Claude Work/` | Session-by-session build notes, plus a progress summary and an HTML design reference. |
| `My notes/` | Mary's own material — currently the website design guidelines PDF. |
| `My LOGO/`, `My LOGO intials/`, `My LOGO animated/` | Logo files: full logo and initials, black and white, hi-res and lo-res, plus animated GIF/MOV versions. |
| `QR Codes for Mary Denman Photography.jpeg` | Printed-marketing QR codes. |
| `STARTUP.md` | Plain-English guide to starting the site from a fresh login. |
| `start.sh` | One-command launcher — does everything in STARTUP.md for you. |
| `.claude/hooks/auto-push.sh` | Hook that commits and pushes to GitHub after every Claude edit. |

---

## The website

**Stack:** Next.js 15 (Pages Router) · React 19 · TypeScript · Tailwind CSS 4 · pnpm
**Local address:** http://localhost:3100
**Deployment target:** Vercel (not deployed yet)

### Pages

| Page | URL | Sections |
|---|---|---|
| Home | `/` | Hero, Gallery, Process, Testimonials, Laughing Carousel |
| About | `/about` | About section |
| Pricing | `/pricing` | Pricing, FAQ |
| Contact | `/contact` | Contact section |

### Components — `src/components/`

Header (sticky, goes transparent → white on scroll), Footer, Hero, Gallery
(masonry grid of 10 curated headshots), Process (Schedule → Get Coached → Walk
Away Confident), Testimonials (real client quotes), LaughingCarousel, FAQ
(8-question accordion), AboutSection, PricingSection, ContactSection, and Layout
(wraps every page, handles SEO via next-seo).

### Images — `public/images/`

69 files. Named for SEO using the formula
`mary-denman-[service-type]-[description]-[location].jpg` — for example
`mary-denman-professional-headshot-greenville-sc-laura.jpg`. Subfolders hold the
`about/`, `gallery/` and `laughing/` sets; the rest sit at the root. Only 17 of
the 86 images are used by the site — the other 69 are kept deliberately for
future use; see `public/images/README.md`. Videos live in `public/videos/`.

### Colors

| Role | Hex |
|---|---|
| Blue (primary) | `#202a91` |
| Blue gradient | `#2f3fc0` → `#202a91` → `#0f1550` |
| Gold (accent) | `#D3AF37` |
| Gold gradient | `#A07810` → `#D3AF37` → `#F5D060` |
| Gold gradient (hover) | `#B8960C` → `#E5C85A` → `#F5D060` |
| Page background | `#fbfaf8` |
| Alternate section background | `#f4f3ee` |

### Real business details baked into the site

Taylors Mill studio, 250 Mill Street BL1225, Taylors, SC 29687 · (864) 380-4905 ·
$125 session fee + $125 per finished image · by appointment, closed Sunday ·
tagline "From Uncomfortable to Confident in One Session."

---

## Running it

The short version — full detail in [STARTUP.md](STARTUP.md):

```bash
cd "/Users/marydenman/Documents/Claude Website" && ./start.sh
```

Or by hand, from `hotsauce-dev-v7/photography-website/`:

| Command | What it does |
|---|---|
| `pnpm dev:stable` | Start the site with crash auto-recovery (recommended) |
| `pnpm dev` | Start the site, plain |
| `pnpm build` | Build for deployment |
| `pnpm clean` | Free ports 3100–3200, delete build files (`.next`, `.next-dev`) |
| `pnpm logs` | Watch the server log |

---

## Editing content

Most page copy currently lives **inside the components** in `src/components/` —
that's where the real headlines, testimonials, pricing and FAQ text are.

The files in `content/` (`home.md`, `about.md`, `pricing.md`, `contact.md`) hold
page titles and SEO descriptions in frontmatter, but their body text is still the
original placeholder from the starter template.

To add a photo, drop it into `public/images/` and refer to it as
`/images/your-photo.jpg`.

---

## Still to do

- [ ] Wire the contact form to a real email service (Resend or Formspree)
- [ ] Add real social media URLs — Header and Footer currently link to `#`
- [ ] Add the studio photo to the About page
- [ ] Deploy to Vercel

---

## Backups

Every file Claude writes or edits here is committed and pushed to GitHub
automatically — no git commands needed.

- Repo: <https://github.com/maryfdenman-byte/PhotographyWebsite>
- **The repo is public.** Anything Claude edits becomes publicly visible within seconds.
  To change that: `gh repo edit maryfdenman-byte/PhotographyWebsite --visibility private`
- Log of what the hook did: `.git/claude-autopush.log`
- Review or turn it off: run `/hooks` inside Claude Code
