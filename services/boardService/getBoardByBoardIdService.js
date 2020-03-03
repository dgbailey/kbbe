const getBoardByBoardId = require('../../repositories/boards/getBoardByBoardId');
const ServiceError = require('../../utilities/errors/serviceError');

async function getBoardByBoardIdService(boardId){

    try{
        let board = await getBoardByBoardId(boardId);
        return board
    }
    catch(err){
        throw new ServiceError('getBoardByBoardIdService',err);
    }
}

module.exports = getBoardByBoardIdService;