module.exports = () => () => require('run-sequence')('check', 'compile', 'test:unit', 'test:e2e');
