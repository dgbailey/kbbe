const RepositoryError = require('../../utilities/errors/repositoryError');
const db = require('../../dbConfig');


async function postRowItem(itemObject) {
    //insert(data, [returning])
   
    const {pos,itemContent:item_content,boardId:board_id,colId:column_id,itemId:item_id} = itemObject;
    const insertionObject = {item_content,board_id,column_id,pos,item_id};

    try{
        let item = await db('row_items').insert(insertionObject,['item_content','board_id','column_id','pos','item_id']);
        return item
    }
    catch(err){
        throw new RepositoryError('postRowItem',err);
    }
    

}

module.exports = postRowItem;