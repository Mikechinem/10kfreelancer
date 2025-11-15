/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,   // keep your existing option
  output: 'export',      // enables static export for GitHub Pages
  images: {
    unoptimized: true,   // optional: allows <Image> to work without Next.js server
  },
};

export default nextConfig;

