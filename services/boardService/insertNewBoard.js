const boardRepository = require('../../repositories/boards/saveBoardUtils');

const insertBatchItems = (boardObject) => {
	let { cols } = boardObject;
	let parsedCols = JSON.parse(cols);
	let columnIds = Object.keys(parsedCols);

	let batchArray = [];

	columnIds.forEach((cId) => {
		let itemArr = parsedCols[cId].items;
		itemArr.forEach((i) => {
			let itemObject = { item_id: i.id, item_content: i.text, column_id: cId };
			batchArray.push(itemObject);
		});
	});

	return boardRepository.insertRowItemBatch(batchArray);
};

const insertBatchColumns = (boardObject) => {
	let { cols, boardId } = boardObject;
	let parsedCols = JSON.parse(cols);
	let columnIds = Object.keys(parsedCols);

	let batchedColumns = [];
	columnIds.forEach((cId) => {
		let colData = parsedCols[cId];

		let c = { column_id: colData.id, board_id: boardId };
		batchedColumns.push(c);
	});

	return boardRepository.insertColumnBatch(batchedColumns);
};

const createBoard = (boardObject) => {
	let { boardId, userId, boardName } = boardObject;
	//WARNING this is not a transaction there is no guarantee all of the create board operations will either happen or not happen

	return boardRepository
		.insertBoard(boardId, boardName)
		.then(() => boardRepository.insertUserAndBoard(userId, boardId))
		.then(() => insertBatchColumns(boardObject))
		.then(() => insertBatchItems(boardObject));
};

module.exports = { createBoard };
