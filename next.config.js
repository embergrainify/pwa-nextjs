/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
})

const basePath = process.env.NODE_ENV === 'production'?'/pwa-nextjs':'';

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    basePath: basePath,
  },
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
})
