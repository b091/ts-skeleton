// An example configuration file.
exports.config = {
  frameworks: ['mocha', 'chai'],
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['e2e/*.spec.js'],
  onPrepare: function () {
    global.browser = browser.driver;

    // For non-angular apps
    global.ignoreSynchronization = function (flag) {
      browser.ignoreSynchronization = flag;
    };

    global.startLocalhost = function () {
      ignoreSynchronization(false);
      browser.get('http://localhost:3000');
      browser.manage().timeouts().implicitlyWait(3000);
    };
  }
};
