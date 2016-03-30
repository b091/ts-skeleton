module.exports = function(config) {
  config.set({

    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    basePath: '../',
    singleRun: true,
    colors: true,

    frameworks: ['jspm', 'mocha', 'chai-sinon'],

    jspm: {
      config: 'jspm.conf.js',
      loadFiles: [
        'src/index.js',
        'test/test.js',
        'test/unit/**/*.js'
      ],
      serveFiles: [
        'src/**/*.js',
        'test/resources/*.png',
        'src/style/*.css'
      ]
    },

    files: [],
    exclude: [],

    port: 9999,

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jspm',
      'karma-mocha',
      'karma-chai-sinon',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-mocha-reporter'
    ],

    reporters: [
      'junit',
      'progress',
      'mocha',
      'coverage'
    ],

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

    mochaReporter: {
      output: 'minimal',
      showDiff: 'unified'
    },

    proxies: {
      '/resources/': '/base/test/resources/'
    }

  });
};
