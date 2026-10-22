import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  output: 'export',
  distDir: 'out',
  experimental: {
    staleTimes: {
      static: 30,
      dynamic: 60,
    },
  },
  typedRoutes: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
