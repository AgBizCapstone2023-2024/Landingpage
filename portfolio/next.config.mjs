/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any other Next.js configuration options here

  images: {
    unoptimized: true, // Necessary because GitHub Pages doesn't support dynamic image optimization
  },
};

export default nextConfig;