const db = require('../../dbConfig');

async function getItemsByBoardId(boardId){

    try{
        let items = await db('row_items').where('board_id',boardId);
        return items
    }
    catch(err){
        throw new RepositoryError('getItemsByBoardId',err);
    }
    



}

module.exports = getItemsByBoardId;