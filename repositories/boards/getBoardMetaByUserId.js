const db = require("../../dbConfig");
const RepositoryError = require("../../utilities/errors/repositoryError");
async function getBoardMetaByUserId(userId) {
  try {
    let query = `SELECT * FROM (SELECT * FROM board_user_bridge LEFT JOIN boards ON board_user_bridge.board_id = boards.board_id) AS bmeta WHERE bmeta.user_uuid = ?`;
    let { rows: boardMetaData } = await db.raw(query, [userId]);
    if (boardMetaData.length > 0) {
      return boardMetaData;
    } else {
      return boardMetaData;
    }
  } catch (err) {
    throw new RepositoryError("getBoardMetaByUserId", err);
  }
}

module.exports = getBoardMetaByUserId;
