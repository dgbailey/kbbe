const db = require('../../dbConfig');


async function postBoardByBoardIdAndName(boardId,name){
    //insert(data, [returning])
    try{
        let status = await db('boards').insert({board_id:boardId,name});
        return status
    }
    catch(err){
        throw new Error(`Server error - Repository postBoardByBoardIdAndName - ${err}`)
    }
    

}

module.exports = postBoardByBoardIdAndName;