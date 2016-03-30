"Future proof" application skeleton
===
 [![Build Status][travis-image]][travis-url]  [![Dependency Status][depstat-image]][depstat-url]


This is an example of application skeleton written full in TypeScript 1.8 including: 
unit and e2e test samples, bundling (minification, ng-annotate) and most needed automation tasks with gulp.

Example contains simple implementation of Angular: 
* controller 
* service
* directive
* ui router
* toastr
* ngannotate

### Technology Stack
-------
* TypeScript 
* JSPM 
* Karma 
* Mocha 
* Chaijs 
* Sinonjs
* Protractor
* Gulp 
* Angular 1.x
* Bootstrap from Twitter

### Requirements
-------
* nodejs 5.+
* npm 3.+

### Installing dependencies
-------
```
npm install gulp -g
```

```
git clone https://github.com/b091/ts-skeleton.git
```

```
npm install
```

### Gulp tasks
-------
Serve application or documentation to browser

```
gulp serve            # Serves application, watch *.js, reload
gulp serve --watch-ts # Serves application, watch *.ts, recompile, reload (useful without TypeScript IDE compilation)
gulp serve:dist       # Serves application from bundled dist file
gulp serve:docs       # Generates and serves documentation
```

Validate sources with specified rules defined in : 
* `tslint.json` for TypeScript
* `.eslintrc` for JavaScript


```
gulp check              # check all
gulp check:eslint       # checks gulp tasks and gulpfile (only not generated js files in this repo)
gulp check:tslint       # checks TypeScript files from src/ and test/ directory
gulp check:tslint:src   # checks TypeScript files from src/ directory
gulp check:tslint:test  # checks TypeScript files from src/ directory
```

Angular Bundling 

```
gulp ng:directives      # bundles directives from templateUrl to template
gulp ng:annotate        # adds ng annotate to typescript output
```

Remove compiled files

```
gulp clean      # clean all
gulp clean:src  # removes *.map, *.js files from source directory 
gulp clean:test # removes *.map, *.js files from test directory
```

Run TypeScript compiler

```
gulp compile      # compile all
gulp compile:src  # compile *.ts files from source directory
gulp compile:test # compile *.ts files from test directory
```

Build sources and documentation

```
gulp build      # build all
gulp build:dist # creates self executable distribution file into dist directory
gulp build:docs # generates documentation into docs directory
```

Run tests

```
gulp test       # all tests
gulp test:unit  # run unit tests from test/unit directory
gulp test:e2e   # run e2e tests from test/e2e directory
```

### License

MIT

[travis-url]: https://travis-ci.org/b091/ts-skeleton
[travis-image]: https://travis-ci.org/b091/ts-skeleton.svg?branch=master

[depstat-url]: https://david-dm.org/b091/ts-skeleton#info=devDependencies
[depstat-image]: https://david-dm.org/b091/ts-skeleton/dev-status.svg
