module.exports = (gulp, config) => () => {
  const ngAnnotate = require('gulp-ng-annotate');
  const path = require('path');

  return gulp.src(path.join(config.srcDir, '**', '*.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.srcDir));
};
