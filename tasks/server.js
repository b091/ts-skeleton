'use strict';
module.exports = function(gulp, serverRootDir, watchDir) {
    var fs = require('fs');

    return function() {
        var path = require('path');
        var portFinder = require('portfinder');
        var webServer = require('gulp-webserver');

        if (shouldWatchTypeScript() && liveReload()) {
            console.log('TS ON => Watching TypeScript enabled');
            gulp.watch(path.join(watchDir, '**', '*.ts'), ['compile:src']);
        } else {
            console.log('TS OFF => Watching TypeScript disabled');
        }

        return portFinder.getPort({
            host: 'localhost'
        }, function runServer(err, port) {
            gulp.src([serverRootDir])
                .pipe(webServer({
                    livereload: {
                        enable: liveReload(),
                        filter: filterWatchFilesForLivereload
                    },
                    fallback: 'index.html',
                    open: true,
                    port: port
                }));
        });
    };

    function isInWatchDir(fileName) {
        return fileName.indexOf(watchDir) >= 0;
    }

    function isDirectory(path) {
        return fs.lstatSync(path).isDirectory();
    }

    function isJsFile(fileName) {
        return fileName.match(/.js$/);
    }

    function filterWatchFilesForLivereload(fileName) {
        return isInWatchDir(fileName) && (isDirectory(fileName) || isJsFile(fileName));
    }

    function shouldWatchTypeScript() {
        var argsWithoutTaskName = process.argv.slice(3);
        return !(argsWithoutTaskName.length > 0 && argsWithoutTaskName[0] === '--watch-js');
    }

    function liveReload() {
        return typeof(watchDir) === 'string';
    }
};
