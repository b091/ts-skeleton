module.exports = (gulp, config) => {
    return () => {
        const jsHint = require('gulp-jshint');
        const path = require('path');

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
