// An example configuration file.
exports.config = {
  frameworks: ['mocha','chai'],
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['e2e/*.spec.js'],
  onPrepare: function () {
    global.browser = browser.driver;

    //For non-angular apps
    global.ignoreSynchronization = function () {
      return browser.ignoreSynchronization = true;
    };

    global.startLocalhost = function () {
      ignoreSynchronization();
      browser.get('http://localhost:8000');
      browser.manage().timeouts().implicitlyWait(3000);
    };
  }
};
