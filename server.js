/* jshint node: true */
var config = require('./lib/util/config');
var logger = require('./lib/util/logger');
var api = require('./lib/routes');

logger.info('Starting');

// API Settings
api.set('json spaces', config.get('app:jsonSpace'));

// Start listening
api.listen(
  config.get('server:port'),
  config.get('server:host'),
  function(err) {
    if(err) {
      logger.fatal(err);
      return process.exit(1);
    }
    logger.info(config.get('server'), 'Listening');
  }
);
