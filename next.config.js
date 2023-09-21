/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"], // Add the domain you want to allow images from
  },
};

module.exports = nextConfig;
