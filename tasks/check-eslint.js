module.exports = (gulp, config) => () => {
  const esLint = require('gulp-eslint');
  const path = require('path');
  const packageJson = require(path.join(config.projectDir, 'package.json'));

  return gulp.src([
      path.join(config.configDir, '**', '*.js'),
      '!' + path.join(config.projectDir, packageJson.jspm.configFile),
      path.join(config.taskDir, '**', '*.js'),
      'gulpfile.js'
    ])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(esLint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(esLint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(esLint.failAfterError());

};
