const db = require('../../dbConfig');
const RepositoryError = require('../../utilities/errors/repositoryError');

async function getBoardByBoardId(boardId) {
	try {
		let [ board ] = await db('boards').where('board_id', boardId);
		return board;
	} catch (err) {
		throw new RepositoryError('getBoardByBoardId', err);
	}
}

module.exports = getBoardByBoardId;
