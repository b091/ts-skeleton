module.exports = (gulp, config) => () => {
  const path = require('path');
  const Builder = require('jspm').Builder;
  const builder = new Builder();

  return beginBuild()
    .then(buildSFX)
    .catch((err) => console.log('Build Failed', err));

  function beginBuild() {
    builder.reset();
    return builder.loadConfig(path.join(config.projectDir, 'jspm.conf.js'))
  }

  function buildSFX() {
    const appName = require(path.join(config.projectDir, 'package.json')).name;
    const distFileName = `${appName}.min.js`;
    const outFile = path.join(config.distDir, distFileName);
    const moduleName = 'app';
    const buildConfig = {
      format: 'amd',
      minify: true,
      sourceMaps: true
    };
    return builder.buildStatic(moduleName, outFile, buildConfig);
  }

};

