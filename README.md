# Future proof skeleton application 

This is an example of application skeleton written full in TypeScript 1.5 including: 
unit and e2e test samples and most needed automation tasks with gulp.

The only known issue it has is that there is no working typescript 1.5+ preprocessor for karma. And because of that you need to stop karma server after source change, and before rerun tests in IDE such as WebStorm. 

## Technology Stack

* Typescript 
* JSPM 
* Angular 1.x
* Karma 
* Mocha 
* Chaijs 
* Sinonjs
* Protractor
* Gulp 

### Requirements

* nodejs 0.12.+
* npm 2.13.+

### Installing dependencies
-------
```
npm install gulp jspm typescript tsd -g
```

```
npm install
```

### Gulp tasks
-------
Serves application or documentation to browser

```
gulp serve            # Serves application, watch *.ts, recompile, reload
gulp serve --watch-js # Serves application, watch *.js, recompile, reload (useful with TypeScript IDE compilation)
gulp serve:docs       # Generates and serves documentation
```

Validate sources with specified rules defined in : 
* `tslint.json` for typescript
* `.jshintrc` for javascript


```
gulp check              # check all
gulp check:jshint       # checks gulp tasks and gulpfile (only not generated js files in this repo)
gulp check:tslint       # checks typescript files from src/ and test/ directory
gulp check:tslint:src   # checks typescript files from src/ directory
gulp check:tslint:test  # checks typescript files from src/ directory

```

Removes compiled files

```
gulp clean      # clean all
gulp clean:src  # removes *.map, *.js files from source directory 
gulp clean:test # removes *.map, *.js files from test directory
```

Runs Typescript compiler

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
