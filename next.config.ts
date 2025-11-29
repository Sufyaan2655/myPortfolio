import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.hashnode.com" },
      { hostname: "media.graphassets.com" },
      { hostname: "ap-south-1.graphassets.com" },
      { hostname: "via.placeholder.com" },
      { hostname: "cdn.simpleicons.org" },
      { hostname: "api.iconify.design" },
    ],
    dangerouslyAllowSVG: true,
  },
  async headers() {
    return [
      {
        source: "/images/noise.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
