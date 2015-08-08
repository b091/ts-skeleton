'use strict';
var gulp = require('gulp');
var path = require('path');

var joinPath = path.join;

var config = {
    projectDir: __dirname,
    configDir: joinPath(__dirname, 'config'),
    taskDir: joinPath(__dirname, 'tasks'),
    testDir: joinPath(__dirname, 'test'),
    srcDir: joinPath(__dirname, 'src'),
    docsDir: joinPath(__dirname, 'docs'),
    distDir: joinPath(__dirname, 'dist'),
    tslintSrcConf: joinPath(__dirname, 'src', 'tslint.json'),
    tslintTestConf: joinPath(__dirname, 'test', 'tslint.json'),
    watchDir: joinPath(__dirname, 'src')
};

gulp.task('check:jshint', require('./tasks/jshint')(gulp, config));
gulp.task('check:tslint', ['check:tslint:src', 'check:tslint:test']);
gulp.task('check:tslint:src', require('./tasks/tslint')(gulp, config.srcDir, config.tslintSrcConf));
gulp.task('check:tslint:test', require('./tasks/tslint')(gulp, config.testDir, config.tslintTestConf));
gulp.task('check', ['check:jshint', 'check:tslint']);

gulp.task('clean:src', require('./tasks/clean')(gulp, config.srcDir));
gulp.task('clean:test', require('./tasks/clean')(gulp, config.testDir));
gulp.task('clean', ['clean:src', 'clean:test']);

gulp.task('compile:src', ['clean:src'], require('./tasks/compile')(gulp, config.srcDir));
gulp.task('compile:test', ['clean:test'], require('./tasks/compile')(gulp, config.testDir));
gulp.task('compile', ['compile:src', 'compile:test']);

gulp.task('build', require('./tasks/build')(gulp, config));

gulp.task('serve', ['compile:src'], require('./tasks/server')(gulp, __dirname, config.watchDir));
gulp.task('serve:docs', ['typedoc'], require('./tasks/server')(gulp, config.docsDir));

gulp.task('test', ['compile'], require('./tasks/test')(config.testDir));

gulp.task('typedoc', require('./tasks/typedoc')(gulp, config));

gulp.task('default', ['check', 'test', 'build']);
