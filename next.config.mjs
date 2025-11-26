/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // keep your existing option
  images: {
    unoptimized: true, // allows <Image> to work without Next.js server
  },
  // Remove output: "export" for SSR / serverless API routes
  experimental: {
    // you can keep other experimental flags here if needed
  },
};

export default nextConfig;
