/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.pinimg.com",
      "raw.githubusercontent.com",
      "play-lh.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
