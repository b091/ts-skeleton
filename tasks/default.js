module.exports = () => {
  return () => {
    return require('run-sequence')('check', 'compile', 'test:unit', 'test:e2e', () => {
      console.log('Done');
    });
  };
};
