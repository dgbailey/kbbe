/**
 *
 * @param {Oject} expressServer - The express server instance
 * @param {String} entityId - The uuid of our channel
 */

function marshallClientMetaData(expressServer, entityId) {
  let clientMetaData = [];

  if (expressServer.locals.clients[entityId]) {
    expressServer.locals.clients[entityId].forEach((c) => {
      if (c.isActive) {
        c.userMeta["isActive"] = true;
      } else {
        c.userMeta["isActive"] = false;
      }
      clientMetaData.push(c.userMeta);
    });
  }

  return clientMetaData;
}

module.exports = marshallClientMetaData;
