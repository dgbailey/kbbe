//router
const express = require('express');
const router = express.Router();
//registration service
const registerNewUser = require('../services/userService/registerNewUser');


router.post('/signup',async (req,res) =>{

    //take body, extract creds, send creds to registration service, send appropriate response
    let body = req.body;
    console.log(body);
    try{
        let newUser = await registerNewUser(body);
        res.status(200).json(newUser);
    }
    catch(err){
        res.status(500).json(err.message);
        console.log(err.message)
    }

})


module.exports = router;