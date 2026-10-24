/** @type {import('next').NextConfig} */
const nextConfig = {
  // The About page became a section of the home page.
  async redirects() {
    return [{ source: '/about', destination: '/#about', permanent: true }]
  },
}

module.exports = nextConfig
