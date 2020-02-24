const bcrypt = require('bcryptjs');


function validatePassword(storedPasswordHash,reqObjectPassword){
    if(bcrypt.compareSync(storedPasswordHash,reqObjectPassword)){
        return true
    }
    return false

    //returns boolean

}

module.exports = validatePassword;