# Photography Website Setup - Claude Code Prompt

You are Claude Code setting up a bulletproof Next.js development environment for a photographer. This must be reliable and conflict-free.

## CRITICAL REQUIREMENTS
- Research LTS versions before installing ANY dependencies
- Use ports 3100-3200 (find available port)
- Test all 4 endpoints before declaring success
- Use pnpm as package manager
- Follow ALL requirements specified in CLAUDE.md
- If any expected file or directory is missing, create it

## STEP 1: RESEARCH & SETUP

### 1.1 Research LTS/Stable Versions
Research current LTS or stable versions per dependency list in CLAUDE.md.
Update `docs/dependency-versions.md` with research findings, replacing all [TO BE RESEARCHED] placeholders.

### 1.2 Find Available Port
Use port scanning script from `/docs/configuration-templates.md` to find available port in range 3100-3200.
Document the selected port and save it for use in ALL configuration files.

## STEP 2: PROJECT INITIALIZATION

### 2.1 Navigate to Project Directory
Navigate to the `photography-website/` directory to begin setup.

### 2.2 Initialize Package Manager
- Install pnpm globally if not present
- Initialize project with `pnpm init`

### 2.3 Create Stability Infrastructure
Create stability scripts per `/docs/stability-scripts-guide.md`:
- Development stability monitor (`scripts/dev-stable.js`)
- Platform-appropriate cleanup utility
- Make executable if Unix-based: `chmod +x scripts/*.sh`

### 2.4 Install Dependencies
Install dependencies per the categorized list in CLAUDE.md (Core, Styling, Development, Additional sections).
CRITICAL: Tailwind CSS MUST be v4.1.0 or higher.

## STEP 3: CREATE CONFIG FILES

Create all configuration files using templates from `/docs/configuration-templates.md`:
- Update package.json with enhanced scripts (with ASSIGNED PORT)
- tsconfig.json
- tailwind.config.js
- postcss.config.js
- Global styles (src/styles/globals.css)
- _app.tsx (CRITICAL - create BEFORE components)
- Enhanced .gitignore
- Environment configuration (.env.development)
- Enhanced Next.js configuration (next.config.js)

## STEP 4: VERIFY COMPONENTS

Components are already included in the project. Verify all 3 components exist:
- src/components/Header.tsx
- src/components/Footer.tsx
- src/components/Layout.tsx

## STEP 5: CREATE PAGES

Create 4 pages using templates from `/docs/component-examples.md`:
- src/pages/index.tsx (reads content/home.md)
- src/pages/about.tsx (reads content/about.md)
- src/pages/pricing.tsx (reads content/pricing.md)
- src/pages/contact.tsx (reads content/contact.md)

## STEP 6: VERIFY CONTENT FILES

Content files are already included in the project. Verify all 4 content files exist:
- content/home.md
- content/about.md
- content/pricing.md  
- content/contact.md

## STEP 7: BUILD VERIFICATION AND TESTING

Follow build verification procedures from `/docs/stable-dev-setup.md`:
- Pre-build cleanup (`pnpm run clean`)
- Verify build works (`pnpm run build`)
- Start server on assigned port (`pnpm run dev`)
- **CRITICAL**: Run port validation checks (FAIL if server on port 3000)
- Test all 4 endpoints using curl commands from `/docs/component-examples.md`
- LEAVE SERVER RUNNING for user review

## STEP 8: GIT SETUP

Initialize git repository:
```bash
git init
git add .
git commit -m "Initial photography website setup"
```

## SUCCESS CRITERIA
Complete ALL success criteria specified in CLAUDE.md.

Display completion message with assigned port and next steps per CLAUDE.md.
