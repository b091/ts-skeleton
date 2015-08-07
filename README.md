# Sample Skeleton App 

## Technology Stack
* Typescript 
* JSPM 
* Angular 1.x
* Karma 
* Mocha 
* Chaijs 
* Sinonjs
* Gulp 

### Installing
```
npm install gulp jspm typescript tsd -g
```

```
npm install
```

### Gulp tasks

Serves sample app from `index.html` to browser with livereload

```
gulp serve
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

Run tests from `test/` directory

```
gulp test
```
