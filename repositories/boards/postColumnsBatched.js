const db = require('../../dbConfig');


const postColumnsBatched = async (batchedColData) =>{
    //insert(data, [returning])
    
    try{
        let status =  await db('columns').insert(batchedColData);
        return status
    }
    catch(err){
        throw new Error(`Server error - Repository postColumnsBatched - ${err}`)
    }
    

}

module.exports = postColumnsBatched;
