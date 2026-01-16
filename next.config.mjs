/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true,
  },

  async headers() {
    const isDev = process.env.NODE_ENV === 'development'

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? "default-src 'self'; connect-src 'self' https://api.emailjs.com; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'none';"
              : "default-src 'self'; connect-src 'self' https://api.emailjs.com; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-ancestors 'none';",
          },
        ],
      },
    ]
  },
}

export default nextConfig
