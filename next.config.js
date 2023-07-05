/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: [
      "media.discordapp.net",
      "cdn.discordapp.com",
      "lh3.googleusercontent.com",
      "media.licdn.com",
      "cdn.discordapp.com",
    ],
  },
};

module.exports = nextConfig;