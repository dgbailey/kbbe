const express = require('express');
const router = express.Router();
const userService = require('../services/boardService/getColumnsByBoardId');
const boardService = require('../services/boardService/insertNewBoard');
const getColumnsByBoardServic = require('../services/columnService/getColumnsByBoardIdService');
const getBoardByBoardIdService = require('../services/boardService/getBoardByBoardIdService');
const getColumnsByBoardIdService = require('../services/columnService/getColumnsByBoardIdService');
const getItemsByBoardIdService = require('../services/itemService/getItemsByBoardIdService');
const postBoardByBoardIdAndNameService = require('../services/boardService/postBoardByBoardIdAndNameService');
const postUserToBoardService = require('../services/boardService/postUserToBoardService');

// router.get('/:id',(req,res) =>{

//     let id = req.params.id;
//     console.log('boardid',id)

//     userService(id).then(data => res.status(200).json(data)).catch(err => res.status(500).json(err));

// })

router.get('/:id', async (req, res) => {
	let id = req.params.id;
	try {
		let board = await getBoardByBoardIdService(id);
		res.status(200).json(board);
	} catch (customError) {
		next(customError);
	}
});

router.get('/:id/columns', async (req, res) => {
	let id = req.params.id;
	try {
		let columns = await getColumnsByBoardIdService(id);
		res.status(200).json(columns);
	} catch (customError) {
		next(customError);
	}
});

router.get('/:id/items', async (req, res) => {
	let id = req.params.id;
	try {
		let items = await getItemsByBoardIdService(id);
		res.status(200).json(items);
	} catch (customError) {
		next(customError);
	}
});

//still running into unhandled promise warnings. This was fixed.  Async errors were not being passed to express next();
//options put board id in cookie?
//after connection send back message asking for board id

router.post('/', async (req, res, next) => {
	let q = req.query;
	console.log('queryyy', req.query);
	try {
		//TODO:below should be a single database transaction
		let board = await postBoardByBoardIdAndNameService(q);
		let { board_id: boardId } = board;
		let user = await postUserToBoardService({ boardId, ...q });
		res.status(200).json(board);
	} catch (customError) {
		next(customError);
	}
});

// router.get('/:id/actions',(req,res) =>{

//in the future this will return actions taken by users on this board

// })

router.post('/newBoard', (req, res) => {
	console.log('boardObject', req.body);
	let boardObject = req.body;
	boardService
		.createBoard(boardObject)
		.then((data) => res.status(200).json(res.statusCode))
		.catch((err) => res.status(500).json(err));
});

module.exports = router;
