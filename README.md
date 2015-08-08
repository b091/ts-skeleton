# Sample Skeleton App 

This is an example of application skeleton written full in TypeScript 1.5 including: unit and e2e test samples and most needed automation tasks with gulp. 

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

### Installing dependencies

```
npm install gulp jspm typescript tsd -g
```

```
npm install
```

### Gulp tasks

Serves sample app from `index.html` to browser with livereload 

```
gulp serve                       # watches *.ts files and reload page with recompile
gulp serve --watch-js            # watches *.js files and reload page with recompile (useful with IDE TypeScript compilation)
```

Generates and serves documentation

```
gulp serve:docs
```

Checks source and tests with tslint and gulp tasks with jshint

```
gulp check
```

Removes compiled `*.js` and `*.map.js` files

```
gulp clean
```

Runs Typescript compiler on `test/` and `src/` directory

```
gulp compile
```

Creates self executable distribution file in `dist/` directory

```
gulp build
```

Runs unit tests from `test/unit` directory and end to end tests from `test/e2e`

```
gulp test
```
