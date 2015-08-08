'use strict';
module.exports = function(gulp, config) {
    return function() {
        var jsHint = require('gulp-jshint');
        var path = require('path');

        return gulp.src([
            path.join(config.configDir, '**', '*.js'),
            '!' + path.join(config.projectDir, 'jspm.conf.js'),
            path.join(config.taskDir, '**', '*.js'),
            'gulpfile.js'
        ])
            .pipe(jsHint(path.join(config.projectDir, '.jshintrc')))
            .pipe(jsHint.reporter(require('jshint-stylish')));
    };
};
