'use strict';
var gulp = require('gulp');
var path = require('path');

var config = {
  projectDir: __dirname,
  configDir: path.join(__dirname, 'config'),
  taskDir: path.join(__dirname, 'tasks'),
  testDir: path.join(__dirname, 'test'),
  srcDir: path.join(__dirname, 'src'),
  docsDir: path.join(__dirname, 'docs'),
  distDir: path.join(__dirname, 'dist'),
  tsLintSrcConf: path.join(__dirname, 'src', 'tslint.json'),
  tsLintTestConf: path.join(__dirname, 'test', 'tslint.json'),
  watchDir: path.join(__dirname, 'src')
};

gulp.task('clean:src', require('./tasks/clean')(gulp, config.srcDir));
gulp.task('clean:test', require('./tasks/clean')(gulp, config.testDir));
gulp.task('clean', ['clean:src', 'clean:test']);

gulp.task('compile:src', ['clean:src'], require('./tasks/compile')(gulp, config.srcDir));
gulp.task('compile:test', ['clean:test'], require('./tasks/compile')(gulp, config.testDir));
gulp.task('compile', ['compile:src', 'compile:test']);

gulp.task('serve:docs', ['typedoc'], require('./tasks/server')(gulp, config.docsDir));
gulp.task('serve:e2e', require('./tasks/server')(gulp, __dirname, false, false));
gulp.task('serve', ['compile:src'], require('./tasks/server')(gulp, __dirname, config.watchDir));

gulp.task('check:jshint', require('./tasks/jshint')(gulp, config));
gulp.task('check:tslint', ['check:tslint:src', 'check:tslint:test']);
gulp.task('check:tslint:src', require('./tasks/tslint')(gulp, config.srcDir, config.tsLintSrcConf));
gulp.task('check:tslint:test', require('./tasks/tslint')(gulp, config.testDir, config.tsLintTestConf));
gulp.task('check', ['check:jshint', 'check:tslint']);

gulp.task('test:unit', ['compile'], require('./tasks/test')(config.testDir));
gulp.task('test:e2e', ['serve:e2e', 'compile'], require('./tasks/e2e')(gulp, config));
gulp.task('test', ['test:unit', 'test:e2e']);

gulp.task('build:dist', require('./tasks/build')(gulp, config));
gulp.task('build:docs', require('./tasks/typedoc')(gulp, config));
gulp.task('build', ['build:dist', 'build:doc']);
