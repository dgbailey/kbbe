const postColumn = require('../../repositories/columns/postColumn');
const ServiceError = require('../../utilities/errors/serviceError');
const uuid4 = require('uuid4');

async function postColumnService({ boardId, colName, ...rest }) {
	const colId = uuid4();
	let pos = 65000;
	try {
		const colObject = { colName, colId, boardId, pos };
		let [ column ] = await postColumn(colObject);
		return column;
	} catch (err) {
		throw new ServiceError('postColumnService', err);
	}
}

module.exports = postColumnService;
