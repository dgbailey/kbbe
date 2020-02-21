const db = require('../../dbConfig');


async function selectByUsername(username){
    try{
        let user = await db.select('users').where({'username':username});   
        if(!user.length){
            return false
        }
        return user
    }
    catch(err){
        throw new Error(`Server Error Selecting Username: ${err}`)
    }

}

module.exports = selectByUsername;