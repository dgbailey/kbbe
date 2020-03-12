const db = require('../../dbConfig');
const RepositoryError = require('../../utilities/errors/repositoryError');

async function getItemsByBoardId(boardId) {
	try {
		let items = await db('row_items').where('board_id', boardId);
		return items;
	} catch (err) {
		throw new RepositoryError('getItemsByBoardId', err);
	}
}

module.exports = getItemsByBoardId;
