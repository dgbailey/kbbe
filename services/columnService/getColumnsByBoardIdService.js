const getColumnsByBoardId= require('../../repositories/columns/getColumnsByBoardIdNew');
const ServiceError = require('../../utilities/errors/serviceError');

async function getColumnsByBoardIdService(boardId){

    try{
        let columns = await getColumnsByBoardId(boardId);
        return columns
    }
    catch(err){
       throw new ServiceError('getColumnsByBoardIdService',err);
    }
    
    


}

module.exports = getColumnsByBoardIdService;