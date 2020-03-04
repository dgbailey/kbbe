const postColumn= require('../../repositories/columns/postColumn');
const ServiceError = require('../../utilities/errors/serviceError');
const uuid4 = require('uuid4');

async function postColumnService({boardId,colName,pos,...rest}){
    const colId = uuid4();
    
    try{
        const colObject = {colId,colPos,boardId,pos};
        let column = await postColumn(colObject);
        return column
    }
    catch(err){
        throw new ServiceError('postColumnService',err)
    }
    
    


}

module.exports = postColumnService;