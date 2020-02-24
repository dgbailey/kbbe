const db = require('../../dbConfig');


const insertBoard = boardId =>{

    return db('boards').insert({board_id:boardId})

}

const insertUserAndBoard = (userId,boardId) => {

    return db('board_user_bridge').insert({user_uuid:userId,board_id:boardId})
}


const insertColumnBatch = async (batchedColData) =>{
    return db('columns').insert(batchedColData)

}




const insertRowItemBatch = async (batchRowContent) =>{



    return db('row_items').insert(batchRowContent);

}

// const insertMultipleColumns = boardOjbect => {

//     let {boardId,cols} = boardObject;
//     return manipulateMultipleColumns(cols,insertColumn)
// }


// const insertMultipleRowItems = boardObject => {
//     let {cols} = boardObject;
//     return manipulateMultipleColumns(cols,insertRowItem)

// }




module.exports = {insertColumnBatch,insertRowItemBatch,insertBoard,insertUserAndBoard}