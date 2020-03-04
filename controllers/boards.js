const express = require('express');
const router = express.Router();
const userService = require('../services/boardService/getColumnsByBoardId');
const boardService = require('../services/boardService/insertNewBoard');
const getColumnsByBoardServic = require('../services/columnService/getColumnsByBoardIdService');
const getBoardByBoardIdService = require('../services/boardService/getBoardByBoardIdService');
const postBoardByBoardIdAndNameService = require('../services/boardService/postBoardByBoardIdAndNameService');


// router.get('/:id',(req,res) =>{

//     let id = req.params.id;
//     console.log('boardid',id)

//     userService(id).then(data => res.status(200).json(data)).catch(err => res.status(500).json(err));



// })

router.get('/:id',async (req,res) =>{

    let id = req.params.id;
    try{
        let board = await getBoardByBoardIdService(id);
        res.status(200).json(board);
    }
    catch(customError){
        next(customError)
    }

})

//still running into unhandled promise warnings. This was fixed.  Async errors were not being passed to express next();

router.post('/',async (req,res,next) => {

    let q = req.query;
    console.log(req.query)
    try{
        let board = await postBoardByBoardIdAndNameService(q);
        res.status(200).json(board);
    }
    catch(customError){
        next(customError)
    }
})




// router.get('/:id/actions',(req,res) =>{

    //in the future this will return actions taken by users on this board


// })

router.post('/newBoard',(req,res) => {
    console.log('boardObject',req.body)
    let boardObject = req.body;
    boardService.createBoard(boardObject).then(data => res.status(200).json(res.statusCode)).catch(err => res.status(500).json(err));


})


module.exports=router;