# Photography Website Development Environment

## Project Overview
Bulletproof Next.js development environment for photographers transitioning from WordPress/Squarespace to modern web development using Claude Code.

## The live site is NOT this site

Mary already runs a live photography site at **marydenman.com**, built on
Squarespace. It is a separate, existing business site — verified 2026-09-10:
same business, same Taylors Mill studio address, headline "From uncomfortable
to confident in one photo session".

**This repository is a different, new Next.js site.** It has never been
deployed: no `vercel.json`, no `netlify.toml`, and GitHub Pages returns 404.
It has no domain, and search engines have never crawled it.

Do not conflate the two:

- "The site", "our SEO", "our rank" in this repo means the **undeployed
  Next.js build**, which has no traffic, no index presence, and no rank.
- Never audit, measure, or draw conclusions about marydenman.com and report
  them as findings about this repo, or the reverse.
- Whether this build is meant to replace marydenman.com on that domain, or
  launch somewhere else, is **not yet decided** — ask Mary rather than
  assuming. The answer changes everything about redirects, canonical URLs
  (#26), and whether the two sites would compete with each other.
- Real ranking data for marydenman.com lives in Mary's Google Search Console
  and Google Business Profile. Web searches run from a dev machine are
  personalized and location-skewed; they are not rank measurements.

## Project Goals
- Create reliable, conflict-free development environment
- Separate content from code (frontmatter approach)
- Provide foundation for custom photography websites

## Target Users
- Photographers first, marketers second
- Embracing AI but not traditional coders
- Need reliability over complexity

## Tech Stack Decisions
- **Framework**: Next.js (SEO and performance)
- **Language**: TypeScript (type safety)
- **Styling**: Tailwind CSS (utility-first)
- **Package Manager**: pnpm (faster, more reliable)
- **Content**: Markdown frontmatter (content separation)

## Project Structure
```
photography-website/
├── CLAUDE.md                 # This file
├── docs/                     # Documentation
├── src/                      # Source code
│   ├── pages/               # Next.js pages
│   ├── components/          # Reusable components
│   └── styles/              # Global styles
├── scripts/                  # Stability scripts
│   ├── dev-stable.js        # Development monitor with auto-recovery
│   └── cleanup.js/.sh       # Port and artifact cleanup
├── logs/                     # Development logs
│   ├── dev-server.log       # General output
│   └── dev-server-errors.log # Error tracking
├── content/                  # Content files (photographer-editable)
│   ├── home.md
│   ├── about.md
│   ├── pricing.md
│   └── contact.md
├── .env.development          # Development environment config
└── public/                   # Static assets
    └── images/              # Photography images
```

## Development Workflow

### Starting Development
```bash
# Standard development
pnpm run dev

# Enhanced stability (recommended)
pnpm run dev:stable

# Clean start (removes artifacts first)
pnpm run dev:clean
```

### Stability Features
- Automatic error recovery with dev:stable command
- Memory optimization (4GB allocation)
- Port cleanup on restart
- Comprehensive error logging
- Platform-aware scripts (Windows/macOS/Linux)

### Development Commands
```bash
pnpm dev          # Standard development
pnpm dev:stable   # With monitoring & auto-recovery
pnpm dev:clean    # Clean start (removes artifacts first)
pnpm clean        # Manual cleanup
pnpm logs         # View development logs
pnpm logs:error   # View error logs only
```

### Editing Content
**Not wired up.** The four files in `/content/` are not read by anything —
no file in `src/` imports `gray-matter` or references `content/`, so editing
them changes nothing on the site. Page copy is currently hard-coded in the
components under `src/components/`. Tracked as #4; `STARTUP.md` documents the
real behaviour.

### Adding Images
1. Place images in `/public/images/`
2. Reference as `/images/filename.jpg`

## Port Configuration
- **Assigned Port**: 3100 (set by `-p 3100` in the `dev` script)
- **Range**: 3100-3200
- **Status**: In use. `pnpm dev` serves http://localhost:3100.

## Dependencies
All dependencies use LTS/STABLE versions for stability:
- Versions documented in `/docs/dependency-versions.md`
- Research conducted before installation
- EXACT researched versions must be installed - NO SUBSTITUTIONS

### Required Dependencies:
**Core:**
- next@15.5.0
- react@19.1.0
- react-dom@19.1.0
- typescript@5.9.2

**Styling:**
- tailwindcss@4.1.12 (MUST be v4.1+ minimum)
- @tailwindcss/postcss@4.1.12 (MUST be v4.1+ minimum)
- postcss@8.5.6
- autoprefixer@10.4.21

**Development:**
- @types/node@24.3.0
- @types/react@18.3.12
- @types/react-dom@18.3.1
- eslint@9.9.1
- eslint-config-next@15.0.0
- prettier@3.3.3
- @eslint/eslintrc@3.3.7 (added later, for the ESLint 9 flat config — see #3)

**Additional:**
- next-seo@6.6.0
- lucide-react@0.542.0
- gray-matter@4.0.3 (required for reading frontmatter)

### Dependency Installation Rules:
- Install the EXACT versions documented in research - NO SUBSTITUTIONS
- EXCEPTION: Tailwind CSS and @tailwindcss/postcss MUST be v4.1.0 or higher, even if research finds older stable versions
- If research finds Tailwind < v4.1.0, install v4.1.0 instead

## Critical Requirements
- [x] Use EXACT researched dependency versions
- (n/a) Check existing files with read_file before creating new ones
- (n/a) Leave development server running after setup for review
- (n/a) Follow instructions precisely - no enhancements

*The three above were instructions to the agent performing the original setup,
not observable state; there is no record of them either way, so they are marked
n/a rather than ticked.*

## Success Criteria
*Verified 2026-09-08 against package.json, docs/dependency-versions.md, the
files on disk, a `pnpm build` run, and HTTP 200 from all four routes on
localhost:3100.*
- [x] All dependencies use EXACT RESEARCHED LTS/STABLE versions (Tailwind CSS v4.1+ minimum)
- [x] Core dependencies installed: next, react, react-dom, typescript
- [x] Styling dependencies installed: tailwindcss v4.1+, @tailwindcss/postcss v4.1+, postcss, autoprefixer
- [x] TypeScript dependencies installed: @types/node, @types/react, @types/react-dom
- [x] Development dependencies installed: eslint, eslint-config-next, prettier
- [x] Additional dependencies installed: next-seo, lucide-react, gray-matter
- [x] Stability scripts created (dev-stable.js, cleanup.js, cleanup.sh present in `scripts/`; not re-run during this check)
- [x] Logs directory created for error tracking
- [x] Environment variables configured (.env.development)
- [x] Package manager conflicts resolved (no package-lock.json with pnpm)
- [x] Port assigned within range 3100-3200
- [x] Development server running on assigned port (FAIL if running on port 3000)
- [x] Build completes without errors (`pnpm run build`)
- [x] All 4 pages render successfully
- [x] All 4 endpoints return 200 status
- [x] Development server LEFT RUNNING for review
- [x] Content files verified (all 4 pages)
- [x] Git repository initialized

## Project Content Files
Content files are included in the photography-website directory and provide:
- Professional placeholder content for all 4 pages
- Proper YAML frontmatter structure (title, description)
- Contact page includes showContactForm: true in frontmatter
- Ready for photographer customization

## Next Steps After Setup
1. Edit content files in `/content/` folder
2. Add photography images to `/public/images/`
3. Update branding in Header component
4. Deploy to hosting platform

## Git Setup Commands
```bash
git init
git add .
git commit -m "Initial photography website setup"
```

## Completion Message Template
Display completion message with:
- Assigned port number
- Development server URL
- Success criteria status
- Next steps from above section

## File Locations
- **Content**: `/content/*.md` files
- **Components**: `/src/components/`
- **Pages**: `/src/pages/`
- **Config**: Root level config files
- **Scripts**: `/scripts/` (dev-stable.js, cleanup utilities)
- **Logs**: `/logs/` (dev-server.log, dev-server-errors.log)
- **Templates**: `/docs/configuration-templates.md`
- **Examples**: `/docs/component-examples.md`
- **Stability Guide**: `/docs/stability-scripts-guide.md`
- **Setup Guide**: `/docs/stable-dev-setup.md`
- **Tailwind v4 Guide**: `/docs/tailwind-v4-guide.md`

## Troubleshooting
If the development server becomes unstable:
1. Stop the server (Ctrl+C)
2. Run `pnpm clean` to remove artifacts and kill hanging processes
3. Run `pnpm dev:stable` for monitored development with auto-recovery
4. Check `/logs/` directory for detailed error information

See `/docs/stable-dev-setup.md` for comprehensive troubleshooting guide.

## Platform Compatibility
The development environment automatically detects and adapts to:
- **macOS**: Uses bash scripts and native tools (lsof, kill)
- **Linux**: Compatible with standard Unix tools
- **Windows**: Falls back to Node.js scripts and Windows commands (netstat, taskkill)

Scripts handle cross-platform differences automatically, ensuring consistent behavior regardless of operating system.

---
*This file serves as persistent memory for Claude Code across sessions.*
