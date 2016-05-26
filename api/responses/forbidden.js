"use strict";

/**
 * 403 (Forbidden) Response
 *
 * The request was a legal request, but the server is refusing to respond to it.
 * Unlike a 401 Unauthorized response, authenticating will make no difference.
 * Error code for user not authorized to perform the operation or the resource is unavailable for some reason.
 */

module.exports = function(data, config) {
  const response = _.assign({
    code: _.get(config, 'code', 'E_FORBIDDEN'),
    message: _.get(config, 'message', 'User not authorized to perform the operation'),
    data: data || {}
  }, _.get(config, 'root', {}));

  this.res.set({
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
  });
  this.res.status(403);
  this.res.send(response);
};