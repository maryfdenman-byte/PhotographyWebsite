# Dependency Versions - Research Results

## Research Findings

### Core Runtime
- **Node.js**: v22 LTS (Active LTS until October 2025, Maintenance LTS until April 2027)

### Core Framework & Libraries
- **Next.js**: 15.5.0 (Latest stable with React 19 support, Turbopack builds)
- **React**: 19.1.0 (Latest stable release, March 2025)
- **React DOM**: 19.1.0 (Match React version)

### Language & Tools
- **TypeScript**: 5.9.2 (Latest stable release, no traditional LTS model)

### Styling (v4.1+ REQUIRED)
- **Tailwind CSS**: 4.1.12 (Latest stable v4.1 with text shadows, masks, improved compatibility)
- **@tailwindcss/postcss**: 4.1.12 (Match Tailwind version)
- **PostCSS**: 8.5.6 (Latest stable release)
- **Autoprefixer**: 10.4.21 (Latest stable release)

### Development Dependencies
- **@types/node**: 24.3.0 (Latest, matches Node.js major version compatibility)
- **@types/react**: 18.3.12 (Compatible with React 19.x)
- **@types/react-dom**: 18.3.1 (Compatible with React DOM 19.x)
- **ESLint**: 9.9.1 (Latest stable with flat config system)
- **eslint-config-next**: 15.0.0 (Latest stable, compatible with Next.js 15.x)
- **Prettier**: 3.3.3 (Latest stable formatting tool)

### Additional Dependencies
- **next-seo**: 6.6.0 (Latest stable SEO optimization package)
- **lucide-react**: 0.542.0 (Latest stable icon library, 3 days old)
- **gray-matter**: 4.0.3 (Stable frontmatter parsing package)

## Installation Commands
Update these with researched versions:

```bash
# Core dependencies
pnpm add next@15.5.0 react@19.1.0 react-dom@19.1.0 typescript@5.9.2

# Styling dependencies  
pnpm add tailwindcss@4.1.12 @tailwindcss/postcss@4.1.12 postcss@8.5.6 autoprefixer@10.4.21

# Development dependencies
pnpm add -D @types/node@24.3.0 @types/react@18.3.12 @types/react-dom@18.3.1 eslint@9.9.1 eslint-config-next@15.0.0 prettier@3.3.3

# Additional dependencies
pnpm add next-seo@6.6.0 lucide-react@0.542.0 gray-matter@4.0.3
```

## Critical Notes
- Use EXACT researched versions - NO SUBSTITUTIONS
- Tailwind CSS MUST be v4.1.0 or higher per project requirements
- All versions researched on: August 29, 2025