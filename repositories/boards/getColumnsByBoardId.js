const db = require('../../dbConfig');


async function getColumnsByBoardId(boardId){

    try{
        let columns = await db('columns').where('board_id',boardId);
        return columns
    }
    catch(err){
        throw new Error(`Server Error - Repository getColumnsByBoardId - ${err}`)
    }
    
  


}

module.exports = getColumnsByBoardId;