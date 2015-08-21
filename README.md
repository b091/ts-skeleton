Future proof application skeleton
===
 [![Build Status][travis-image]][travis-url]  [![Dependency Status][depstat-image]][depstat-url]


This is an example of application skeleton written full in TypeScript 1.5 including: 
unit and e2e test samples and most needed automation tasks with gulp.

The only known issue it has is that there is no working TypeScript 1.5 preprocessor for karma. And because of that you need to stop karma server after source change and before rerun tests in IDE such as WebStorm. 

### Example
-------
Example contains sample implementation of Angular: controller, service, directive.

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
* Angular 1.x (animate, cookies, messages, resource, sanitize, toastr, translate, ui-router, ui-bootstrap)
* Bootstrap from Twitter

### Requirements
-------
* nodejs 0.12.+
* npm 2.13.+

### Installing dependencies
-------
```
npm install gulp jspm typescript tsd -g
```

```
git cone https://github.com/b091/ts-skeleton.git
```

```
npm install
```

### Gulp tasks
-------
Serve application or documentation to browser

```
gulp serve            # Serves application, watch *.ts, recompile, reload
gulp serve --watch-js # Serves application, watch *.js, recompile, reload (useful with TypeScript IDE compilation)
gulp serve:docs       # Generates and serves documentation
```

Validate sources with specified rules defined in : 
* `tslint.json` for TypeScript
* `.jshintrc` for JavaScript


```
gulp check              # check all
gulp check:jshint       # checks gulp tasks and gulpfile (only not generated js files in this repo)
gulp check:tslint       # checks TypeScript files from src/ and test/ directory
gulp check:tslint:src   # checks TypeScript files from src/ directory
gulp check:tslint:test  # checks TypeScript files from src/ directory
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
