/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['demo.snipcart.com']
  }
}

module.exports = nextConfig
