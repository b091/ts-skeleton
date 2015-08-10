'use strict';
module.exports = function() {
    return function() {
        var runSequence = require('run-sequence');
        return runSequence('check', 'compile', 'test:unit', 'test:e2e', function() {
            console.log('Done');
        });
    };
};
