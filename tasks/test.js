'use strict';
module.exports = function(dir) {
    return function(done) {
        var path = require('path');
        var Server = require('karma').Server;

        new Server({
            configFile: path.join(dir, 'karma.conf.js')
        }, done).start();
    };
};