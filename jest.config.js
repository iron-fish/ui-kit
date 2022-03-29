const mapModuleName = x => ({
  [`^${x}/(.*)$`]: `<rootDir>/${x}/$1`,
})

const mapModuleNames = names =>
  names.reduce((blob, x) => Object.assign({}, blob, mapModuleName(x)), {})

const moduleNameMapper = mapModuleNames([
  '__tests__',
  'components',
  'hooks',
  'svg',
  'style',
  'utils',
])

module.exports = {
  automock: false,
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
  },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // https://github.com/testing-library/react-hooks-testing-library/issues/294
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['dist'],
  moduleNameMapper,
  testEnvironment: 'jest-environment-jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
}
