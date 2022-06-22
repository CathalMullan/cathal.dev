const GIT_HASH = process.env.GITHUB_SHA || 'Unknown Git Hash'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    GIT_HASH,
  },

  generateBuildId: async () => GIT_HASH,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
