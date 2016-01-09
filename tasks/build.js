module.exports = () => () => require('run-sequence')('build:dist', 'build:docs');
