/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  distDir: 'out',
  cleanDistDir: false
}

module.exports = nextConfig
