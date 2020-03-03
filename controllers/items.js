const express = require('express');
const router = express.Router();
const getItemsByBoardIdService = require('../services/itemService/getItemsByBoardIdService');
const postItemsByBoardIdService = require('../services/itemService/postRowItemsService');

router.get('/:id',async (req,res) =>{

    let boardId = req.params.id;

    try{
        let items = await getItemsByBoardIdService(boardId);
        res.status(200).json(items);
    }
    catch(customError){
        throw customError
    }


})


router.post('/',(req,res) => {

    const q = req.query;
    try{
        const rowItem = postItemsByBoardIdService(q);
        res.status(200).json(rowItem)
    }
    catch(customError){
        throw customError
    }
})


module.exports = router;