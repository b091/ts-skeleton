module.exports = (gulp, config) => () => {
  const path = require('path');
  const typeDoc = require('gulp-typedoc');
  const appName = require(path.join(config.projectDir, 'package.json')).name;
  const tsConfig = require(path.join(config.srcDir, 'tsconfig.json'));
  const compilerOptions = tsConfig.compilerOptions;

  delete compilerOptions.sourceMap;
  compilerOptions.out = config.docsDir;
  compilerOptions.name = appName;
  compilerOptions.mode = 'file';

  return gulp
    .src([config.srcDir + '**/*.ts'])
    .pipe(typeDoc(compilerOptions));
};
