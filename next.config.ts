import type { NextConfig } from "next";

const nextConfig: NextConfig = {
typescript: {
    ignoreBuildErrors: true,
  },
  // إلغاء توقف البناء بسبب أخطاء ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  // reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
