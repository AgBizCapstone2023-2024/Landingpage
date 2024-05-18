/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necessary because GitHub Pages doesn't support dynamic image optimization
  },
  basePath: '/Landingpage', // Replace with the actual repository name
};

export default nextConfig;
