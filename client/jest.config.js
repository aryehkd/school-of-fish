module.exports = {
    testMatch: [
      '**/?(*.)test.ts?(x)'
    ],
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
     },
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
  }