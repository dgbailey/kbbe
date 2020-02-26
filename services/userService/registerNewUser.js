//registration 
//uuid4 creation needed
const db = require('../../dbConfig');
const validateUsername = require('./validateUsername');
const insertUser = require('../../repositories/users/insertUser');
const {generateToken} = require('../../utilities/auth/auth');
const generateUuid = require('../../utilities/auth/generateUuid');
const generateHash = require('../../utilities/auth/hashPassword');

async function registerNewUser(userCreds){

    try{
        let userNameIsValid = await validateUsername(userCreds.username);
        if(!userNameIsValid){
            throw new Error('DUPLICATE_ID')
        }
        else{
          
            let uuid = generateUuid();
            let hashedPassword = generateHash(userCreds.password)
            userCreds['uuid'] = uuid;
            userCreds['password'] = hashedPassword;

            let [{username:userName,user_uuid:userUuid}] = await insertUser(userCreds);
            let jwt = generateToken({userName,userUuid});

            return jwt
            
            
        }
    }
    catch(err){
        throw new Error(`Server error in registration: ${err}`);
    }
  

}

module.exports = registerNewUser;