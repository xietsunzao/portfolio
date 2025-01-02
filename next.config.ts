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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'jefrimaruli.dev',
          },
        ],
        destination: 'https://www.jefrimaruli.dev/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig