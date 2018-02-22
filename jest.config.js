module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'styl'
  ],
  setupFiles: [
    '<rootDir>/test/jestLib/setup.js'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  moduleNameMapper: {
    '\\.(png|gif|jpe?g|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    'styles': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    'node_modules/(?!cozy-ui)'
  ],
  globals: {
    '__ALLOW_HTTP__': false,
    '__TARGET__': 'browser',
    'cozy': {}
  }
}
