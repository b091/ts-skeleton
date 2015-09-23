'use strict';
module.exports = function(gulp, config) {
    return function() {
        var ngAnnotate = require('gulp-ng-annotate');
        var path = require('path');

        return gulp.src(path.join(config.srcDir, '**', '*.js'))
            .pipe(ngAnnotate())
            .pipe(gulp.dest(config.srcDir));
    };
};
