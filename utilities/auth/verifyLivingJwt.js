const jwt = require('jsonwebtoken');




function verifyLivingJwt(token,secret=process.env.JWT_SECRET){

    return jwt.verify(token,secret)
}

module.exports = verifyLivingJwt;