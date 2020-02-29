const postBoardByBoardIdAndName = require('../../repositories/boards/postBoardByBoardIdAndName');
const ServiceError = require('../../utilities/errors/serviceError');
const uuid4 = require('uuid4');


async function postBoardByBoardIdAndNameService({name,...rest}){
    const boardId = uuid4();
   
    const boardObject = {boardId,name}

    try{
        let board = await postBoardByBoardIdAndName(boardObject);
        return board
    }
    catch(err){
        throw new ServiceError('postBoardByBoardIdAndNameService',err);
    }
   
}

module.exports = postBoardByBoardIdAndNameService;