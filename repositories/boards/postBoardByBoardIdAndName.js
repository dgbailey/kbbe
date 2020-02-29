const db = require('../../dbConfig');


async function postBoardByBoardIdAndName(boardObject){
    const {boardId:board_id,name} = boardObject;
    const insertionObject = {board_id,name}
    //insert(data, [returning])
    try{
        let board = await db('boards').insert(insertionObject,['board_id','name']);
        return board
    }
    catch(err){
        throw new  RepositoryError('postBoardByBoardIdAndName',err);
    }
    

}

module.exports = postBoardByBoardIdAndName;