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
        permanent: true,
        destination: 'https://www.jefrimaruli.dev/:path*',
        basePath: false,
      },
    ];
  },
}

module.exports = nextConfig