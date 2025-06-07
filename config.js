collectCoverage: true,Add commentMore actions

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['./src/**/*.js'],
  collectCoverageFrom: ['./src/**/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
@@ -41,10 +41,10 @@ module.exports = {
  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 65.51,
      functions: 93.33,
      lines: 81.03,
      statements: 81.66,
      branches: 73.33,
      functions: 92.85,
      lines: 86.27,
      statements: 86.53,
    },
  },
