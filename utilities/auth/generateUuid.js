const uuid4 = require('uuid4');


function generateUuid(){
    return uuid4()
}


module.exports = generateUuid;