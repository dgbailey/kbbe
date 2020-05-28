const getMembersByBoardId = require('../../repositories/boards/getMembersByBoardId');
const ServiceError = require('../../utilities/errors/serviceError');


async function getMembersByBoardIdService(boardId){
    try {
        const boardMembers = await getMembersByBoardId(boardId);
        return boardMembers
    }
    catch(err){
        throw new ServiceError('getMembersByBoardIdService',err);
    }
   
}

module.exports = getMembersByBoardId;