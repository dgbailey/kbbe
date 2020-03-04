const express = require('express');
const router = express.Router();
const getItemsByBoardIdService = require('../services/itemService/getItemsByBoardIdService');
const postItemsByBoardIdService = require('../services/itemService/postRowItemsService');

router.get('/:id',async (req,res,next) =>{

    let boardId = req.params.id;

    try{
        let items = await getItemsByBoardIdService(boardId);
        res.status(200).json(items);
    }
    catch(customError){
        next(customError)
    }


})


router.post('/',async (req,res,next) => {

    const q = req.query;
    try{
        const rowItem = await postItemsByBoardIdService(q);
        res.status(200).json(rowItem)
    }
    catch(customError){
        next(customError)
    }
})


module.exports = router;