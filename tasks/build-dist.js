module.exports = (gulp, config) => () => {
  const path = require('path');
  const Builder = require('jspm').Builder;
  const builder = new Builder();
  const packageJson = require(path.join(config.projectDir, 'package.json'));

  return beginBuild()
    .then(buildSFX)
    .catch((err) => {
      console.log('\n\tBuild Failed\n', err);
      process.exit(1);
    });

  function beginBuild() {
    builder.reset();
    return builder.loadConfig(path.join(config.projectDir, packageJson.jspm.configFile))
  }

  function buildSFX() {
    const appName = packageJson.name;
    const distFileName = `${appName}.min.js`;
    const outFile = path.join(config.distDir, distFileName);
    const moduleName = 'app';
    const buildConfig = {
      format: 'global',
      minify: true,
      sourceMaps: true
    };
    return builder.buildStatic(moduleName, outFile, buildConfig);
  }

};
