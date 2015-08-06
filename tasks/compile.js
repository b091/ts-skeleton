'use strict';
module.exports = function(gulp, plugins, src) {

    function runTSC(directory, done) {
        var cp = require('child_process');
        var tscJs = plugins.joinPath(process.cwd(), 'node_modules/typescript/bin/tsc.js');
        var childProcess = cp.spawn('node', [tscJs, '-p', directory], {cwd: process.cwd()});

        childProcess.stdout.on('data', function(data) {
            console.log(data.toString());
        });
        childProcess.stderr.on('data', function(data) {
            console.log(data.toString());
        });
        childProcess.on('close', function() {
            done();
        });
    }

    return function(done) {
        runTSC(src, done);
    };
};