module.exports = {
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  moduleFileExtensions: ['js', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
// module.exports = {
//     setupFiles: ['dotenv/config'],
//     testEnvironment: "node",
//     roots: [
//       "<rootDir>/src"
//     ],
//     transform: {
//       "^.+\\.tsx?$": "ts-jest"
//     },
//     testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
//     moduleFileExtensions: [
//       "ts",
//       "tsx",
//       "js",
//       "jsx",
//       "json",
//       "node"
//     ],
    
//     collectCoverageFrom: [
//       "src/**/*.{ts,tsx}",
//       "!src/**/*.d.ts"
//     ],
//     coverageThreshold: {
//       "global": {
//         "branches": 80,
//         "functions": 80,
//         "lines": 80,
//         "statements": 80
//       }
//     }
//   };