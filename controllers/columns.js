const express = require('express');
const router = express.Router();
const getColumnsByBoardIdService = require('../services/columnService/getColumnsByBoardIdService');
const postColumnService = require('../services/columnService/postColumnService');


router.get('/:id',async (req,res) =>{

    let id = req.params.id;
    try{
        let columns = await getColumnsByBoardIdService(id);
        res.status(200).json(columns);
    }
    catch(customError){
        throw customError
    }

})

router.post('/',async (req,res) => {

    const q = req.query;
    try{
        let column = postColumnService(q);
        res.status(200).json(column)
    }
    catch(customError){
        throw customError
    }


})


module.exports = router;
