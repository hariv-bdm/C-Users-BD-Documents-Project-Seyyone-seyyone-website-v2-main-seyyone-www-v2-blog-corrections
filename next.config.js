/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['seyyone.com'],
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

module.exports = nextConfig