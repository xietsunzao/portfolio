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
  // The About page became a section of the home page.
  async redirects() {
    return [{ source: '/about', destination: '/#about', permanent: true }]
  },
}

module.exports = nextConfig
