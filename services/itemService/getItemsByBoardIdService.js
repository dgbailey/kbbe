const getItemsByBoardId = require('../../repositories/items/getItemsByBoardId');
const ServiceError = require('../../utilities/errors/serviceError');


async function getItemsByBoardIdService(boardId){

    try{

        let items = await getItemsByBoardId(boardId);
        return items
    }
    catch(err){
        throw new ServiceError('getItemsByBoardIdService',err);
    }
}

module.exports = getItemsByBoardIdService;