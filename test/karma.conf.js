module.exports = (config) => {
  config.set({
    exclude: [],
    port: 9999,
    autoWatch: false,
    basePath: '../',
    singleRun: true,
    colors: true,
    logLevel: config.LOG_INFO, // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    browsers: ['PhantomJS2'],
    reporters: [
      'junit',
      'progress',
      'coverage'
    ],
    frameworks: [
      'jspm',
      'mocha',
      'chai-sinon'
    ],
    plugins: [
      'karma-phantomjs2-launcher',
      'karma-jspm',
      'karma-mocha',
      'karma-chai-sinon',
      'karma-coverage',
      'karma-junit-reporter'
    ],
    jspm: {
      config: 'jspm.conf.js',
      serveFiles: [
        'src/**/*.*',
        'src/**/*.*.map',
        'test/resources/*.png'
      ],
      loadFiles: [
        'test/unit/**/*.js'
      ]
    },
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
