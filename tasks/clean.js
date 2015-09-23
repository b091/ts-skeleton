'use strict';
module.exports = (gulp, dir) => {
    return () => {
        const del = require('del');
        const path = require('path');

        return del([
            path.join(dir, '**', '*.js'),
            '!' + path.join(dir, '*.conf.js'),
            path.join(dir, '**', '*.js.map')
        ]);
    };
};
