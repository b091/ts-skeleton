'use strict';

module.exports = function (config) {
  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    frameworks: ['jspm', 'mocha', 'chai-sinon'],

    // list of files / patterns to load in the browser
    jspm: {
      config: 'jspm.conf.js',
      serveFiles: [
        'src/**/*.*',
        'src/**/*.*.map',
        'test/resources/*.png'
      ],
      loadFiles: [
        'test/test.js',
        'test/unit/**/*.js'
      ]
    },

    // list of files / patterns to exclude
    exclude: [],

    port: 9999,

    browsers: [
      'PhantomJS2'
    ],

    plugins: [
      'karma-phantomjs2-launcher',
      'karma-jspm',
      'karma-mocha',
      'karma-chai-sinon',
      'karma-coverage',
      'karma-junit-reporter'
    ],

    // Continuous Integration mode if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    reporters: ['junit', 'progress', 'coverage'],

    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    coverageReporter: {
      dir: 'report/coverage/',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'cobertura', subdir: 'cobertura'}
      ]
    },

    junitReporter: {
      outputDir: 'report/',
      outputFile: '../test-results.xml',
      suite: ''
    },

    proxies: {
      '/resources/': '/base/test/resources/'
    }

  });
};
