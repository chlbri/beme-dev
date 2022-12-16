// jest.config.js
const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    '^~service': ['<rootDir>/lib/services/main/index.ts'],
    '^~entities/(.*)$': ['<rootDir>/lib/entities/$1'],
    '^~helpers/(.*)$': ['<rootDir>/lib/helpers/$1'],
  },
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
