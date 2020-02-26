const verifyLivingJwt = require('../auth/verifyLivingJwt');

function checkAuthorizationExpired(req,res,next){



    let token = req.cookies.kbt;
    console.log('cookies',req.cookies);

    try{
        if(!token){
            throw new Error('AUTH ERROR: No cookie found');
        }
        
        let decodedJwtSuccess = verifyLivingJwt(token);
        console.log('decoded success',decodedJwtSuccess)
        req.user = decodedJwtSuccess;
        next();
    }
    catch(err){
        res.status(401).json(err.message)
        console.log(err)
    }



}

module.exports = checkAuthorizationExpired;