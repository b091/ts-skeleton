module.exports = (gulp, config) => {
  return () => {
    const path = require('path');
    const appName = require(path.join(config.projectDir, 'package.json')).name;
    const Builder = require('jspm').Builder;

    const builder = new Builder();
    const distFileName = `${appName}.min.js`;
    const outFile = path.join(config.distDir, distFileName);

    builder.reset();
    builder.loadConfig(path.join(config.projectDir, 'jspm.conf.js'))
      .then(() => {
        const moduleName = 'app';
        const buildConfig = {
          format: 'amd',
          minify: true,
          sourceMaps: true
        };
        return builder.buildStatic(moduleName, outFile, buildConfig);
      })
      .catch((err) => console.log('Build Failed', err));
  };
};

