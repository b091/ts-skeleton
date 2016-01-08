module.exports = (gulp, config) => () => {
  const directiveReplace = require('gulp-directive-replace');
  const path = require('path');

  return gulp.src(path.join(config.srcDir, '**', '*.js'))
    .pipe(directiveReplace())
    .pipe(gulp.dest(config.srcDir));
};
