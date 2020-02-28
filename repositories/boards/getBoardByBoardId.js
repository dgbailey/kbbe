const db = require('../../dbConfig');


async function getBoardByBoardId(boardId){

    try{
        let board = await db('boards').where('board_id',boardId);
    }
    catch(err){
        throw new Error(`Server Error - Repository getBoardByBoardId - ${err}`)
    }
    
  


}

module.exports = getBoardByBoardId;