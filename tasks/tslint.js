'use strict';
module.exports = function(gulp, directory, configuration) {
    return function() {
        var path = require('path');
        var tslint = require('gulp-tslint');

        return gulp.src([
            path.join(directory, '**', '*.ts'),
            path.join('!', directory, 'imports', 'typings', '**', '*.ts'),
            path.join('!', directory, 'references.ts')
        ]).pipe(tslint({
            configuration: require(configuration)
        })).pipe(tslint.report('verbose'));
    };
};
