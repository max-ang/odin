"use strict";

/**
 * Production environment settings
 * @description :: This section overrides all other config values ONLY in production environment
 */
const sails = require('sails');

module.exports = {
  port: 3000,
  log: {
    level: 'info'
  },
  appUrl: 'http://127.0.0.1' + (sails.config.port !== 80) ? ':' + sails.config.port : ''
};