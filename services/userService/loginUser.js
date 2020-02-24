const validatePassword = require('../../utilities/auth/validatePassword');
const selectByUserName = require('../../repositories/users/selectByUserName');
const {generateToken} = require('../../utilities/auth/auth');

//check validate password
async function loginExpiredJwt(userCreds){

    try{
        let user = await selectByUserName(userCreds.username);
        if(!user){
            return [false,null]
        }
        else{
            let passwordIsCorrect = validatePassword(user.password);
            if(passwordIsCorrect){
                //generate new token
                let token = generateToken(user);
                return [true,token]
            }
            else{
                return [false,null]
            }
        }
    }
    catch(err){
        throw new Error(`Server Error: login with expired token: ${err} `)
    }
  


}

module.exports = loginExpiredJwt;







//veryify jwt on mount
    //get recent board id from local storage
    //send cookie automatically with recent board id


    //if expired, proceed with regular login and recent board id
    //show error message


//two methdos
    //check jwt in cookie

    //login for new fresh cookie
   

//login is a get request on mount to a jwt protected endpoint with local storage board id
//if it returns unauthorized
    //display expired notification

    //next login attempt will need to verify username and password, create new jwt and set cookie, and return some board setup info in jwt or body 

