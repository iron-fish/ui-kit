module.exports = {
  images: {
    // domains: ['cdnjs.cloudflare.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    })
    return config
  },
}
