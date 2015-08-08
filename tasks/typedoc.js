'use strict';
module.exports = function(gulp, config) {
    return function() {
        var path = require('path');
        var typedoc = require('gulp-typedoc');
        var appName = require(path.join(config.projectDir, 'package.json')).name;
        var tsConfig = require(path.join(config.srcDir, 'tsconfig.json'));

        var compilerOptions = tsConfig.compilerOptions;
        compilerOptions.out = config.docsDir;
        compilerOptions.name = appName;
        compilerOptions.mode = 'file';

        return gulp
            .src([config.srcDir + '**/*.ts'])
            .pipe(typedoc(compilerOptions));
    };
};
