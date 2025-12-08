/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       // Remove NEXT_PUBLIC prefix - not available in config
  //       destination: process.env.BACKEND_URL 
  //         ? `${process.env.BACKEND_URL}/api/:path*`  // Keep /api in destination
  //         : 'http://127.0.0.1:8000/api/:path*'
  //     }
  //   ];
  // },
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
    // allowLocalhost: true,
  },
};

export default nextConfig;