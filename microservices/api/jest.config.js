module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    testRegex: '.e2e-test.ts$',
    maxWorkers: 1,
    setupFiles: [
      './jest.setup.ts'
    ],
    testTimeout: 100000,
  };