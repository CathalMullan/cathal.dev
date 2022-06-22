// eslint-disable-next-line @typescript-eslint/no-var-requires
const childProcess = require('child_process')

const GIT_HASH = childProcess.execSync('git rev-parse HEAD').toString().trim()
console.log(`GIT_HASH: ${GIT_HASH}`)

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
