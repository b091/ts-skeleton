module.exports = (gulp, serverRootDir, watchDir, openBrowser) => {
  return () => {
    const path = require('path');
    var onOffFlag = '✗';
    const browserSync = require('browser-sync').init({
      server: {
        baseDir: [serverRootDir]
      },
      open: openBrowser,
      host: 'localhost',
      browser: 'default',
      notify: false
    });

    if (watchDir) {
      if (shouldWatchTypeScript()) {
        gulp.watch(path.join(watchDir, '**', '*.ts'), (event) => {
          require('./compile')(gulp, watchDir, browserSync.reload)(); // todo single file recompile
          console.info(`File ${event.path} was ${event.type}, running compilation...`);
        });
        onOffFlag = '✓';
      }
      else {
        gulp.watch(path.join(watchDir, '**', '*.js'), browserSync.reload);
      }
    }

    console.info(`\n\tWatching TypeScript ${onOffFlag}\n`);

    return browserSync;
  };

  function shouldWatchTypeScript() {
    const minimist = require('minimist');
    return !!minimist(process.argv.slice(3))['watch-ts'];
  }
};
