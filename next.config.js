/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://ibb.co/', 'cdn.sanity.io', '/'],
  },
}

module.exports = nextConfig
