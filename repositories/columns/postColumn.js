const db = require('../../dbConfig');


const postColumn = async (colObject) =>{
    //insert(data, [returning])
    
    const {pos,colName:column_name,boardId:board_id,pos,colId:column_id} = colObject;
    const insertionObject = {pos,column_name,board_id,column_id};
    try{
        let column =  await db('columns').insert(insertionObject,['pos','column_name','board_id','column_id']);
        return column
    }
    catch(err){
        throw new RepositoryError('postColumnsBatched',err);
    }
    

}

module.exports = postColumn;
