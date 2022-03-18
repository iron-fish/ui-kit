const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  webpack: async (baseConfig, options) => {
    const { module = {}, resolve = {} } = baseConfig
    return {
      ...baseConfig,
      module: {
        ...module,
        rules: [
          ...(module.rules || []),
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
          },
        ],
      },
      resolve: {
        ...resolve,
        plugins: [
          ...(resolve.plugins || []),
          new TsconfigPathsPlugin()
        ]
      },
    };
  },
  features: {
    emotionAlias: false,
  },
}
