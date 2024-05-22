/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cache: false,
  watch: false,
  // globalSetup: './src/lib/globalTestSetup.ts',
  // globalTeardown: './src/lib/globalTestTeardown.ts',
  roots: ['<rootDir>/src'],
};