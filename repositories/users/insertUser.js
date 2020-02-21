const db = require('../../dbConfig');

async function insertUser(user){

    try{
        let u = await db('users').insert({username:user.username,user_uuid:user.uuid,password:user.password},['username','user_uuid']);
        return u

    }
    catch(err){
        throw new Error(`Error inserting user ${err}`)
    }
    

}

module.exports = insertUser;