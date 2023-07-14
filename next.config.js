/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // see: https://blog.cloudflare.com/next-on-pages/
    runtime: "experimental-edge",
  },
};

module.exports = nextConfig;
