/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['demo.snipcart.com']
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, './')
    }
    return config
  }
}

module.exports = nextConfig
