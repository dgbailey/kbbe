const postRowItem = require('../../repositories/items/postRowItem');
const ServiceError = require('../../utilities/errors/serviceError');
const uuid4 = require('uuid4');

async function postRowItemsService({pos,itemContent,boardId,colId,...rest}){

    const itemId = uuid4();
    const itemObject = {pos,itemContent,boardId,colId,itemId}
    

    try{
        let postedItem = await postRowItem(itemObject);
        return postedItem
    }
    catch(err){
        throw new ServiceError('postRowItemsService',err);
    }
}

module.exports = postRowItemsService;