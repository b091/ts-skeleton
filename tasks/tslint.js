'use strict';
module.exports = (gulp, directory, configuration) => {
    return () => {
        const path = require('path');
        const tslint = require('gulp-tslint');

        return gulp.src([
            path.join(directory, '**', '*.ts'),
            path.join('!', directory, 'references.ts')
        ]).pipe(tslint({
            configuration: require(configuration)
        })).pipe(tslint.report('verbose'));
    };
};
