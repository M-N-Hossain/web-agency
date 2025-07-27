/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove deprecated experimental.appDir - it's stable in Next.js 14

  webpack: (config, { isServer }) => {
    // Fix for CSS issues in client-side builds
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },

  // TODO: Remove these once code quality is improved
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimize images for production
  images: {
    unoptimized: process.env.NODE_ENV === "development",
    domains: [], // Add your image domains here
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
