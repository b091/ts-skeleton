module.exports = (gulp, src, cb) => {
  cb = cb || function() {};

  function runTypeScriptCompiler(directory, done) {
    const cp = require('child_process');
    const path = require('path');
    const tscJs = path.join(process.cwd(), 'node_modules', 'typescript', 'bin', 'tsc');
    const childProcess = cp.spawn('node', [tscJs, '-p', directory], {cwd: process.cwd()});
    done = done || function() {};

    childProcess.stdout.on('data', (data) => console.log(data.toString()));
    childProcess.stderr.on('data', (data) => console.log(data.toString()));
    childProcess.on('close', () => {
      cb();
      done();
    });
  }

  return (done) => runTypeScriptCompiler(src, done);
};
