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
            return 'Username already exists';
        }
        else{
          
            let uuid = generateUuid();
            let hashedPassword = generateHash(userCreds.password)
            userCreds['uuid'] = uuid;
            userCreds['password'] = hashedPassword;

            let [user,userUuid] = await insertUser(userCreds);
            let jwt = generateToken({user,userUuid});

            return jwt
            
            
        }
    }
    catch(err){
        throw new Error(`Server error in registration: ${err}`);
    }
  

}

module.exports = registerNewUser;