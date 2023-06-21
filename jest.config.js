/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

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
