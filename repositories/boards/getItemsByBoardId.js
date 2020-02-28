const db = require('../../dbConfig');

async function getItemsByBoardId(boardId){

    try{
        let items = await db('row_items').where('board_id',boardId);
    }
    catch(err){
        throw new Error(`Server Error - Repository getItemsByBoardId - ${err}`)
    }
    



}

module.exports = 