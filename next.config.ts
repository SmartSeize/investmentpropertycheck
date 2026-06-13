import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/de",
        permanent: false,
      },
    ];
  },
};

initOpenNextCloudflareForDev();

export default nextConfig;
