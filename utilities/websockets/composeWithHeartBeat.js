/**
 *
 *
 * @param {Object} ws - The web socket instance
 */

function composeWithHeartBeat(ws) {
  ws.isActive = true;
  ws.on("pong", heartBeat);
}

function heartBeat() {
  this.isActive = true;
}

module.exports = composeWithHeartBeat;
