module.exports = () => () => require('run-sequence')('check:eslint', 'check:tslint');
