module.exports = (dir) => (done) => {
  const path = require('path');
  const Server = require('karma').Server;

  new Server({
    configFile: path.join(dir, 'karma.conf.js')
  }, done).start();
};
