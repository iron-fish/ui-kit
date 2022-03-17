import withFonts from 'next-fonts'

export default withFonts({
  enableSvg: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    })
    return config
  },
})
