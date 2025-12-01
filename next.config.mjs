/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: process.env.NODE_ENV === 'development', // Optional: skip optimization in dev
  },
  // CRITICAL: Allow localhost images
  experimental: {
    allowLocalhost: true,
  },
};

export default nextConfig;