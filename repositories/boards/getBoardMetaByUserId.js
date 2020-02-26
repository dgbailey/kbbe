const db = require('../../dbConfig');


async function getBoardMetaByUserId(userId){
    try{
        let query = `SELECT * FROM (SELECT * FROM board_user_bridge LEFT JOIN boards ON board_user_bridge.board_id = boards.board_id) AS bmeta WHERE bmeta.user_uuid = '${userId}'`
        let boardMetaData = await db.raw(query);
        if(boardMetaData.length > 0){
            return [true,boardMetaData]
        }
        else{
            return [false,boardMetaData]
        }
    }
    catch(err){
        throw new Error(`SERVER Error: In repository getBoardMetaData ${err}`)
    }
   
}


module.exports = getBoardMetaByUserId;