const db = require('../../dbConfig');

const insertBoard = (boardId, name) => {
	return db('boards').insert({ board_id: boardId, name });
};

const insertUserAndBoard = (userId, boardId) => {
	return db('board_user_bridge').insert({ user_uuid: userId, board_id: boardId });
};

const insertColumnBatch = async (batchedColData) => {
	return db('columns').insert(batchedColData);
};

const insertRowItemBatch = async (batchRowContent) => {
	return db('row_items').insert(batchRowContent);
};

module.exports = { insertColumnBatch, insertRowItemBatch, insertBoard, insertUserAndBoard };
