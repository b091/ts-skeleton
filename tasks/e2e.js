'use strict';
module.exports = function (gulp, config) {
  return function () {
    var protractor = require('gulp-protractor').protractor;
    var path = require('path');

    return gulp.src([path.join(config.testDir, 'e2e/*.js')])
      .pipe(protractor({
        configFile: path.join(config.testDir, 'protractor.conf.js')
      }))
      .on('error', function (e) {
        throw e;
      });

  };
};


