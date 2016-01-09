module.exports = () => () => require('run-sequence')('compile', 'test:unit', 'test:e2e');
