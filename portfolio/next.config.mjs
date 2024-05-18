/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure static exports
  // Set target to 'static' for static site generation
  // This generates HTML files for each route
  target: 'static',

  // Add any other Next.js configuration options here

  images: {
    unoptimized: true, // Necessary because GitHub Pages doesn't support dynamic image optimization
  },
};

export default nextConfig;
