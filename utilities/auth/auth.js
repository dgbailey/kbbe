const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();

// router.post('/',(req,res) => {
//     const {username,password} = req.body;
//     db.getByUsername(username)
//     .then(
//         ([user]) => {
         
//             if(user && bcrypt.compareSync(password,user.password)){
//                 const token = generateToken(user);
//                 res.status('200').json(`token:${token}`);
//             }
//             else{
//                 res.status('401').json({message:'Invalid Credentials'});
//             }
//         }
//     )
//     .catch(err => res.status('500').json(err));
// });

function generateToken(user){

    const secret = process.env.JWT_SECRET;
 
    const  payload = {
        subject:user.uuid,
        username:user.username,
    };
    const options = {
        expiresIn:'30s',
        
    };
    
    return jwt.sign(payload, secret ,options);
}

module.exports = {router,generateToken};