/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Dev and build must never share a build directory: 'next build' would
  // overwrite the chunks a running dev server still holds open, leaving it
  // serving 500s with a misleading MODULE_NOT_FOUND. The dev scripts set
  // NEXT_DIST_DIR=.next-dev; 'next build' is left on the default '.next' so
  // Vercel's deployment is unaffected.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    // Serve AVIF/WebP variants of the JPEG originals. Cuts the bytes a phone
    // downloads without touching the source files under public/images.
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Reduce memory usage by optimizing common imports
    optimizePackageImports: ['lucide-react'],
  },
  // Better error handling and memory management
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,      // Keep pages in memory for 1 minute
    pagesBufferLength: 5,           // Limit concurrent page compilation
  },
}

module.exports = nextConfig