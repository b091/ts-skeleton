module.exports = (gulp, config) => {
  return () => {
    const protractor = require('gulp-protractor').protractor;
    const path = require('path');

    return gulp.src([path.join(config.testDir, 'e2e', '*.js')])
      .pipe(protractor({
        configFile: path.join(config.testDir, 'protractor.conf.js')
      }))
      .on('end', () => {
        console.log('E2E Testing complete');
        process.exit();
      })
      .on('error', () => {
        console.log('E2E Tests failed');
        process.exit(1);
      });
  };
};
