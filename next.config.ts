import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.fashion-trading.com',
        pathname: '/**',
      },
    ],// Replace with your image domain
  },
  /* config options here */
};

export default nextConfig;
