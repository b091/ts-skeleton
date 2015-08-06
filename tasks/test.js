'use strict';
module.exports = function(plugins, dir) {
    return function(done) {
        var Server = require('karma').Server;
        new Server({
            configFile: plugins.joinPath(dir, 'karma.conf.js')
        }, done).start();
    };
};