/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
  // webpack(config) {
  //   config.experiments = {
  //     ...config.experiments,
  //     topLevelAwait: true,
  //   }
  //   return config
  // }
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuild: true,
  },
}

module.exports = nextConfig
