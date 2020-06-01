/**
 *
 * @param {Object} webSocketServer -The web socket server returned form ("express-ws")(server);
 * @param {BigInteger} durationMilliseconds -The desired interval (ms) of heartbeats;
 *
 */
function initializeHeartBeat(webSocketServer, durationMilliseconds) {
  const interval = setInterval(function ping() {
    webSocketServer.getWss().clients.forEach((c) => {
      if (c.isActive === false) {
        c.terminate();
      }
      c.isActive = false;
      c.ping(nofunction);
    });
  }, durationMilliseconds);

  webSocketServer.getWss().on("close", function close() {
    clearInterval(interval);
  });
}

function nofunction() {}
module.exports = initializeHeartBeat;
