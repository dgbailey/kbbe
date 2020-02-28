const db = require('../../dbConfig');


const postUserAndBoard = async (userId,boardId) =>{
    //insert(data, [returning])
    
    try{
        let status =  await  db('board_user_bridge').insert({user_uuid:userId,board_id:boardId});
        return status
    }
    catch(err){
        throw new Error(`Server error - Repository postUserAndBoard - ${err}`)
    }
    

}

module.exports = postUserAndBoard;
