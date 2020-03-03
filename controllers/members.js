const express = require('express');
const router = express.Router();
const postUserToBoardService = require('../services/boardService/postUserToBoardService');

router.post('/',(req,res) => {

    const q = req.query;
    try{
        let userAndBoard = await postUserToBoardService(q);
         res.status(200).json(userAndBoard);
    }
    catch(customError){
        throw customError
    }


})

module.exports = router;