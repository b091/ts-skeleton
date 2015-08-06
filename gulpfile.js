'use strict';
var gulp = require('gulp');
var path = require('path');
var plugins = require('gulp-load-plugins')({pattern: ['gulp-*', 'gulp.*', 'del', 'portfinder', 'amd-optimize']});
var joinPath = path.join;
plugins.joinPath = joinPath;
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

gulp.task('check:jshint', require('./tasks/jshint')(gulp, plugins, config));
gulp.task('check:tslint', ['check:tslint:src', 'check:tslint:test']);
gulp.task('check:tslint:src', require('./tasks/tslint')(gulp, plugins, config.srcDir, config.tslintSrcConf));
gulp.task('check:tslint:test', require('./tasks/tslint')(gulp, plugins, config.testDir, config.tslintTestConf));
gulp.task('check', ['check:jshint', 'check:tslint']);

gulp.task('clean:src', require('./tasks/clean')(gulp, plugins, config.srcDir));
gulp.task('clean:test', require('./tasks/clean')(gulp, plugins, config.testDir));
gulp.task('clean', ['clean:src', 'clean:test']);

gulp.task('compile:src', ['clean:src'], require('./tasks/compile')(gulp, plugins, config.srcDir));
gulp.task('compile:test', ['clean:test'], require('./tasks/compile')(gulp, plugins, config.testDir));
gulp.task('compile', ['compile:src', 'compile:test']);

gulp.task('dist', require('./tasks/build')(gulp, plugins, config));

gulp.task('serve', ['compile:src'], require('./tasks/server')(gulp, plugins, __dirname, config.watchDir));
gulp.task('serve:docs', ['typedoc'], require('./tasks/server')(gulp, plugins, config.docsDir));

gulp.task('test', ['compile'], require('./tasks/test')(plugins, config.testDir));

gulp.task('typedoc', require('./tasks/typedoc')(gulp, plugins, config));

gulp.task('default', ['check', 'test', 'dist']);
