const verifyLivingJwt = require('../auth/verifyLivingJwt');

function checkAuthorizationExpired(req,res,next){



    let token = req.cookies.kbt;
    console.log('cookies',req.cookies);

    try{
        let decodedJwtSuccess = verifyLivingJwt(token);
        req.user = decodedJwtSuccess;
        next();
    }
    catch(err){
        res.status(401).json(err.message)
    }



}

module.exports = checkAuthorizationExpired;