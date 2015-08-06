'use strict';
module.exports = function(gulp, plugins, config) {

    return function() {
        return gulp.src([
            plugins.joinPath(config.configDir, '**', '*.js'),
            '!' + plugins.joinPath(config.projectDir, 'jspm.conf.js'),
            plugins.joinPath(config.taskDir, '**', '*.js'),
            'gulpfile.js'
        ])
            .pipe(plugins.jshint(plugins.joinPath(config.projectDir, '.jshintrc')))
            .pipe(plugins.jshint.reporter(require('jshint-stylish')));
    };
};
