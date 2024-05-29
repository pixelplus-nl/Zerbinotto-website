/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.zerbinotto.nl",
      },
    ],
  },
};

export default nextConfig;
