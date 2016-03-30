const gulp = require('gulp');
const path = require('path');

const config = {
  projectDir: __dirname,
  configDir: path.join(__dirname, 'config'),
  taskDir: path.join(__dirname, 'tasks'),
  testDir: path.join(__dirname, 'test'),
  srcDir: path.join(__dirname, 'src'),
  docsDir: path.join(__dirname, 'docs'),
  distDir: path.join(__dirname, 'dist'),
  tsLintSrcConf: path.join(__dirname, 'tslint.json'),
  tsLintTestConf: path.join(__dirname, 'tslint.json'),
  watchDir: path.join(__dirname, 'src')
};

gulp.task('clean:src', require('./tasks/clean')(gulp, config.srcDir));
gulp.task('clean:test', require('./tasks/clean')(gulp, config.testDir));
gulp.task('clean', ['clean:src', 'clean:test']);

gulp.task('compile:src', ['clean:src'], require('./tasks/compile')(gulp, config.srcDir));
gulp.task('compile:test', ['clean:test'], require('./tasks/compile')(gulp, config.testDir));
gulp.task('compile', ['compile:src', 'compile:test']);

gulp.task('serve:docs', ['build:docs'], require('./tasks/server')(gulp, config.docsDir, false, true));
gulp.task('serve:e2e', require('./tasks/server')(gulp, __dirname, false));
gulp.task('serve:dist', ['build:dist'], require('./tasks/server')(gulp, config.distDir, false, true));
gulp.task('serve', ['compile:src'], require('./tasks/server')(gulp, __dirname, config.watchDir, true));

gulp.task('check:eslint', require('./tasks/check-eslint')(gulp, config));
gulp.task('check:tslint', ['check:tslint:src', 'check:tslint:test']);
gulp.task('check:tslint:src', require('./tasks/check-tslint')(gulp, config.srcDir, config.tsLintSrcConf));
gulp.task('check:tslint:test', require('./tasks/check-tslint')(gulp, config.testDir, config.tsLintTestConf));
gulp.task('check', require('./tasks/check')());

gulp.task('test:unit', require('./tasks/test-unit')(config.testDir));
gulp.task('test:e2e:webdriver_update', require('gulp-protractor').webdriver_update);
gulp.task('test:e2e', ['serve:e2e', 'test:e2e:webdriver_update'], require('./tasks/test-e2e')(gulp, config));
gulp.task('test', require('./tasks/test')());

gulp.task('ng:directives', ['compile:src'], require('./tasks/ng-directives')(gulp, config));
gulp.task('ng:annotate', ['ng:directives'], require('./tasks/ng-annotate')(gulp, config));

gulp.task('build:dist', ['ng:annotate'], require('./tasks/build-dist')(gulp, config));
gulp.task('build:docs', require('./tasks/build-typedoc')(gulp, config));
gulp.task('build', require('./tasks/build')());

gulp.task('default', require('./tasks/default')());
