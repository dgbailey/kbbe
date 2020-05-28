const express = require('express');
const router = express.Router();
const getItemsByBoardIdService = require('../services/itemService/getItemsByBoardIdService');
const postItemsByBoardIdService = require('../services/itemService/postRowItemsService');
const broadCast = require('../utilities/websockets/broadCast');
router.get('/:id', async (req, res, next) => {
	let boardId = req.params.id;

	try {
		let items = await getItemsByBoardIdService(boardId);
		res.status(200).json(items);
	} catch (customError) {
		next(customError);
	}
});

router.post('/', async (req, res, next) => {
	//TODO:figure out how to include entity based broadcasting via entityId
	const q = req.query;
	const socketPayload = q.socketAction;

	try {
		const rowItem = await postItemsByBoardIdService(q);

		broadCast(req.app.locals.clients, { ...rowItem, socketPayload }, q.boardId);
		res.status(200).json(rowItem);
	} catch (customError) {
		next(customError);
	}
});

module.exports = router;
