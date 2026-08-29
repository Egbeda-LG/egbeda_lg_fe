import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "egbeda-lg-uploads.s3.eu-north-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  /*
   * Pages fetch from the API on the server, so those calls never appear in the
   * browser's network tab. This prints each one to the dev terminal instead.
   */
  logging: {
    fetches: { fullUrl: true },
  },
}

export default nextConfig
