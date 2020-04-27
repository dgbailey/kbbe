const express = require('express');
const router = express.Router();
const getColumnsByBoardIdService = require('../services/columnService/getColumnsByBoardIdService');
const postColumnService = require('../services/columnService/postColumnService');
const broadCast = require('../utilities/websockets/broadCast');

router.get('/:id', async (req, res, next) => {
	let id = req.params.id;
	try {
		let columns = await getColumnsByBoardIdService(id);
		res.status(200).json(columns);
	} catch (customError) {
		next(customError);
	}
});

router.post('/', async (req, res, next) => {
	const q = req.query;
	const socketPayload = q.socketAction;

	try {
		let column = await postColumnService(q);
		broadCast(req.app.locals.clients, JSON.stringify({ ...column, socketPayload }), q.boardId);
		res.status(200).json(column);
	} catch (customError) {
		next(customError);
	}
});

module.exports = router;
