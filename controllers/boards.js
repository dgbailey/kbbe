const express = require('express');
const router = express.Router();
const userService = require('../services/boardService/getColumnsByBoardId');
const boardService = require('../services/boardService/insertNewBoard');

router.get('/:id',(req,res) =>{

    let id = req.params.id;
    console.log('boardid',id)

    userService(id).then(data => res.status(200).json(data)).catch(err => res.status(500).json(err));



})

// router.get('/:id/columns',(req,res) =>{

    //returns columns associated with the board


// })


// router.get('/:id/items',(req,res) =>{

    //returns items associated with the board


// })



// router.get('/:id/actions',(req,res) =>{

    //in the future this will return actions taken by users on this board


// })

router.post('/newBoard',(req,res) => {
    console.log('boardObject',req.body)
    let boardObject = req.body;
    boardService.createBoard(boardObject).then(data => res.status(200).json(res.statusCode)).catch(err => res.status(500).json(err));


})


module.exports=router;