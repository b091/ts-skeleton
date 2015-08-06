'use strict';
module.exports = function(gulp, plugins, config) {
    return function() {
        var appName = require(plugins.joinPath(config.projectDir, 'package.json')).name;
        var tsConfig = require(plugins.joinPath(config.srcDir, 'tsconfig.json'));
        var compilerOptions = tsConfig.compilerOptions;
        compilerOptions.out = config.docsDir;
        compilerOptions.name = appName;
        compilerOptions.mode = 'file';

        return gulp
            .src([config.srcDir + '**/*.ts'])
            .pipe(plugins.typedoc(compilerOptions));
    };
};
