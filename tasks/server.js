module.exports = (gulp, serverRootDir, watchDir, openBrowser) => {
  const path = require('path');
  const TS_WATCH_FLAG = '--watch-ts';

  return () => {

    const browserSync = require('browser-sync').init({
      server: {
        baseDir: [serverRootDir]
      },
      open: openBrowser,
      host: 'localhost',
      browser: 'default',
      notify: false
    });

    setWatchers(browserSync.reload);

    return browserSync;
  };

  function setWatchers(reloadCallback) {
    var onOffFlag = '✗';

    if (watchDir) {
      var fileExtensionToWatch = 'js';
      var callback = (event) => {
        console.info(`File ${event.path} was ${event.type}`);
        reloadCallback();
      };

      if (shouldWatchTypeScript()) {
        fileExtensionToWatch = 'ts';
        callback = (event) => {
          require('./compile')(gulp, watchDir, reloadCallback, event.path)();
          console.info(`File ${event.path} was ${event.type}, running compilation...`);
        };
        onOffFlag = '✓';
      }

      gulp.watch(path.join(watchDir, '**', `*.${fileExtensionToWatch}`), callback);
    }

    console.info(`\n\tWatching TypeScript ${onOffFlag}\n`);
  }

  function shouldWatchTypeScript() {
    return process.argv.slice(3).indexOf(TS_WATCH_FLAG) !== -1;
  }
};
