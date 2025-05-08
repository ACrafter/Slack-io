/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.slack-edge.com",
      },
    ],
  },
};

export default nextConfig;
