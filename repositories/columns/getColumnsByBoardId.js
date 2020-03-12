const db = require('../../dbConfig');
const RepositoryError = require('../../utilities/errors/repositoryError');

const getColumnsByBoardId = async (bId) => {
	let query = `SELECT * FROM columns  WHERE board_id = '${bId}';`;
	try {
		let columns = await db.raw(query);
		return columns;
	} catch (error) {
		throw new RepositoryError('getColumnsByBoardId', err);
	}
};

module.exports = getColumnsByBoardId;
