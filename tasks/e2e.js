'use strict';
module.exports = function(gulp, config) {
    return function() {
        var protractor = require('gulp-protractor').protractor;
        var path = require('path');

        return gulp.src([path.join(config.testDir, 'e2e/*.js')])
            .pipe(protractor({
                configFile: path.join(config.testDir, 'protractor.conf.js')
            }))
            .on('end', function() {
                console.log('E2E Testing complete');
                process.exit();
            })
            .on('error', function(error) {
                console.log('E2E Tests failed');
                process.exit(1);
            });
    };
};
