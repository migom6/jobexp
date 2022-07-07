/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    // disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ["images.unsplash.com"],
  },
});

module.exports = nextConfig;
