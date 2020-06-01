/**
 *
 * @param {Object} espressServer - express server instance
 */
function initializeChannels(expressServer) {
  if (!expressServer.locals.clients) {
    expressServer.locals.clients = {};
  }
}

module.exports = initializeChannels;
