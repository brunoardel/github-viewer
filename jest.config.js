module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/stories.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!theme/**',
    '!test-coverage/**',
    '!.storybook/**',
    '!storybook-static/**',
    '!stories/**',
    '!public/**',
    '!.next/**',
    '!.github/**',
    '!.circleci/**',
    '!.eslintrc.js',
    '!i18n.js',
    '!*config.js',
    '!server.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleDirectories: ['node_modules', './'],
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
}
