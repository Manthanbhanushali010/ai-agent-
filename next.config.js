/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ppr: 'incremental', // Requires canary version - removed for stable
    // reactCompiler: true, // Requires canary version - removed for stable
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'getstream.io',
      }
    ],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig 