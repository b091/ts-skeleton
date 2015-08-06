'use strict';
module.exports = function(gulp, plugins, dir) {
    return function() {
        return plugins.del([
            plugins.joinPath(dir, '**', '*.js'),
            '!' + plugins.joinPath(dir, '*.conf.js'),
            plugins.joinPath(dir, '**', '*.js.map')
        ]);
    };
};
