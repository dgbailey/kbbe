const db = require('../../dbConfig');

async function insertUser(user){

    try{
        let user = await db('users').insert({username:user.username,user_uuid:user.uuid,password:user.password});
        return user

    }
    catch(err){
        throw new Error(`Error inserting user ${err}`)
    }
    

}
