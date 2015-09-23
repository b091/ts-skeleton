'use strict';
module.exports = function(gulp, config) {
    return function() {
        var directiveReplace = require('gulp-directive-replace');
        var path = require('path');

        return gulp.src(path.join(config.srcDir, '**', '*.js'))
            .pipe(directiveReplace())
            .pipe(gulp.dest(config.srcDir));
    };
};
