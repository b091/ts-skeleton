'use strict';
module.exports = function(gulp, dir) {
    return function() {
        var del = require('del');
        var path = require('path');

        return del([
            path.join(dir, '**', '*.js'),
            '!' + path.join(dir, '*.conf.js'),
            path.join(dir, '**', '*.js.map')
        ]);
    };
};
