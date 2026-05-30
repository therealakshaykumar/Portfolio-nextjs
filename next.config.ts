import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
      }
    ]
  },
  allowedDevOrigins: ['http://10.81.234.158:3000'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: "Accept-CH",
            value: "Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA-Model, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version-List",
          },
          {
            key: "Permissions-Policy",
            value: "ch-ua=*, ch-ua-mobile=*, ch-ua-platform=*, ch-ua-platform-version=*, ch-ua-model=*, ch-ua-arch=*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
