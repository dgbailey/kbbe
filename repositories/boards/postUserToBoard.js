const db = require('../../dbConfig');


const postUserToBoard = async (userId,boardId) =>{
    //insert(data, [returning])
    
    try{
        let userToBoard =  await  db('board_user_bridge').insert({user_uuid:userId,board_id:boardId},['user_uuid','board_id']);
        return userToBoard
    }
    catch(err){
        throw new  RepositoryError('postUserToBoard',err);
    }
    

}

module.exports = postUserToBoard;
