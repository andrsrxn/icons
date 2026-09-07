import type { NextConfig } from 'next'

// biome-ignore lint/style/noProcessEnv: only way to check if the app is in development mode
// biome-ignore lint/correctness/noProcessGlobal: only way to check if the app is in development mode
const isDev = process.env.NODE_ENV === 'development'

const connectServices = 'https://va.vercel-scripts.com https://res.cloudinary.com'
const scriptServices = 'https://va.vercel-scripts.com'
const imgServices = 'https://res.cloudinary.com'

const cspHeader = ` 
    default-src 'self';
    script-src 'self' 'wasm-unsafe-eval' 'unsafe-inline' ${isDev ? "'unsafe-eval' blob:" : ''} ${scriptServices} ;
    connect-src 'self' ${connectServices};
    style-src 'self' 'unsafe-inline';
    frame-src 'self';
    img-src 'self' blob: data: ${imgServices};
    media-src ${imgServices};
    object-src 'none';
    font-src 'self';
    worker-src 'self' ${isDev ? ' blob:' : ''};
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    script-src-attr 'none';
    ${isDev ? '' : 'upgrade-insecure-requests'}
    `

const headers = [
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\n/gu, ''),
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Download-Options', value: 'noopen' },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
]

if (!isDev) {
  headers.push(
    {
      key: 'Origin-Agent-Cluster',
      value: '?1',
    },
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=31536000; includeSubDomains; preload',
    }
  )
}

const nextConfig: NextConfig = {
  // biome-ignore lint/suspicious/useAwait: next.js api
  async headers() {
    return [
      {
        source: '/((?!api|_next|_vercel|url|.*\\..*).*)',
        headers,
      },
    ]
  },
  trailingSlash: false,
  poweredByHeader: false,
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
