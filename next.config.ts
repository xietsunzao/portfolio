/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'jefrimaruli.dev',
          },
        ],
        permanent: true,
        destination: 'https://www.jefrimaruli.dev',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'jefrimaruli.dev',
          },
        ],
        permanent: true,
        destination: 'https://www.jefrimaruli.dev/:path*',
      },
    ];
  },
}

module.exports = nextConfig