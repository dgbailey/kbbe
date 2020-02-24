const jwt = require('jsonwebtoken');
//assumptions:

    //user has jtw cookie
//actions
    //validate jwt, which may be its own thing



function verifyLivingJwt(jwt,secret=process.env.JWT_SECRET){

    return jwt.verify(jwt,secret)
}

module.exports = verifyLivingJwt;