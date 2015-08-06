'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        var Builder = require('jspm').Builder;
        var appName = require(plugins.joinPath(config.projectDir, 'package.json')).name;
        var builder = new Builder();
        var distFileName = appName + '.min.js';
        var outFile = plugins.joinPath(config.distDir, distFileName);

        builder.reset();
        builder.loadConfig(plugins.joinPath(config.projectDir, 'jspm.conf.js'))
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
                    .pipe(plugins.replace(config.distDir, '.'))
                    .pipe(gulp.dest(config.distDir));
                console.log('Build complete');
            })
            .catch(function(err) {
                console.log('Build Failed', err);
            });
    };
};

