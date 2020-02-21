//registration 
//uuid4 creation needed
const db = require('../../dbConfig');
const validateUsername = require('./validateUsername');
const insertUser = require('../../repositories/users/insertUser');

async function registerUser(userCreds){

    try{
        let userNameIsValid = await validateUsername(userCreds.username);
        if(!userNameIsValid){
            return 'Username already exists' //return some message about already existing --this is more business logic for the service
        }
        else{
            //hash pw
            //create jwt
            let user = await insertUser(userCreds);
            //return jwt and any user info on object
            //still need controller and URI
            
            
        }
    }
    catch(err){
        throw new Error(`Server error in registration: ${err}`);
    }
  
   
    //check if userid exists
    //throw error if exists
    //else
        //hash user credentials
        //issue token

}