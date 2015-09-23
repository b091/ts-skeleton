'use strict';
module.exports = () => {
    return () => {
        const runSequence = require('run-sequence');
        return runSequence('check', 'compile', 'test:unit', 'test:e2e', () => {
            console.log('Done');
        });
    };
};
