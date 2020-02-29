const postColumn= require('../../repositories/columns/postColumn');
const ServiceError = require('../../utilities/errors/serviceError');
const uuid4 = require('uuid4');

async function postColumnService({colOrder,colName,boardId,pos,...rest}){
    const colId = uuid4();
    const colObject = {colId,colOrder,colName,boardId,pos};

    try{
        let column = await postColumn(colObject);
        return column
    }
    catch(err){
        throw new ServiceError('postColumnService',err)
    }
    
    


}

module.exports = postColumnService;