module.exports = (gulp, serverRootDir, watchDir, openBrowser) => {

  return () => {
    const path = require('path');

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
      var callback = reloadCallback;

      if (shouldWatchTypeScript()) {
        fileExtensionToWatch = 'ts';
        callback = (event) => {
          require('./compile')(gulp, watchDir, reloadCallback)(); // todo single file recompile
          console.info(`File ${event.path} was ${event.type}, running compilation...`);
        };
        onOffFlag = '✓';
      }

      gulp.watch(path.join(watchDir, '**', `*.${fileExtensionToWatch}`), callback);
    }

    console.info(`\n\tWatching TypeScript ${onOffFlag}\n`);
  }

  function shouldWatchTypeScript() {
    const minimist = require('minimist');
    return !!minimist(process.argv.slice(3))['watch-ts'];
  }
};
