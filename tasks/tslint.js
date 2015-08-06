'use strict';
module.exports = function(gulp, plugins, directory, configuration) {
    return function() {
        gulp.src([
            plugins.joinPath(directory, '**', '*.ts')
        ])
            .pipe(plugins.tslint({
                configuration: require(configuration)
            }))
            .pipe(plugins.tslint.report('verbose'));
    };
};
