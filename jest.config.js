module.exports = async () => {
  return {
    verbose: true,
    transform: { '^.+\\.[t|j]sx?$': 'babel-jest' },
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/', '/src/'],
    testMatch: ['**/test/**/*test.js'],
  };
};
