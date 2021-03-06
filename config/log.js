"use strict";

/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 */

module.exports = {
  log: {
    /**
     * The order of precedence for log levels from lowest to highest is:
     * silly, verbose, info, debug, warn, error, silent
     * @type {String}
     */
    level: 'error'
  }
};