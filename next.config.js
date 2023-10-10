/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig



