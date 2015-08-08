'use strict';
module.exports = function(gulp, config) {
    return function() {
        var path = require('path');
        var replace = require('gulp-replace');
        var appName = require(path.join(config.projectDir, 'package.json')).name;
        var Builder = require('jspm').Builder;

        var builder = new Builder();
        var distFileName = appName + '.min.js';
        var outFile = path.join(config.distDir, distFileName);

        builder.reset();
        builder.loadConfig(path.join(config.projectDir, 'jspm.conf.js'))
            .then(function() {
                var moduleName = 'app';
                var buildConfig = {
                    sfxFormat: 'amd',
                    minify: true,
                    sourceMaps: true
                };
                return builder.buildSFX(moduleName, outFile, buildConfig);
            })
            .then(function() {
                var mapFile = outFile + '.map';
                // Walk around for babel issue
                // https://github.com/babel/babel/issues/1567
                gulp.src(mapFile, {base: config.distDir})
                    .pipe(replace(config.distDir, '.'))
                    .pipe(gulp.dest(config.distDir));
                console.log('Build complete');
            })
            .catch(function(err) {
                console.log('Build Failed', err);
            });
    };
};

