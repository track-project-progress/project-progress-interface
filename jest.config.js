module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['/node_modules/', '/src/'],
    testMatch: ['**/test/**/*test.js'],
  };
};
