const db = require('../../dbConfig');


async function getBoardMetaByUserId(userId){

    let boardMetaData = await db.raw('SELECT * FROM (SELECT * FROM board_user_bridge LEFT JOIN boards ON board_user_bridge.board_id = boards.board_id) AS bmeta')

}


module.exports = getBoardMetaByUserId;