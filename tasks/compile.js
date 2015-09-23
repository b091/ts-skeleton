'use strict';
module.exports = (gulp, src) => {

    function runTSC(directory, done) {
        const cp = require('child_process');
        const path = require('path');
        const tscJs = path.join(process.cwd(), 'node_modules/typescript/bin/tsc');
        const childProcess = cp.spawn('node', [tscJs, '-p', directory], {cwd: process.cwd()});

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

    return (done) => {
        return runTSC(src, done);
    }
};
