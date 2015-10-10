System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "amd",
    "experimentalDecorators": true
  },
  paths: {
    "github:*": "vendor/jspm_packages/github/*",
    "npm:*": "vendor/jspm_packages/npm/*",
    "app": "src/index"
  }
});
