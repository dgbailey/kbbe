const db = require('../../dbConfig');
const RepositoryError = require('../../utilities/errors/repositoryError');

async function insertUserIntoEntityBridge(uniqueId, entityId) {
	console.log(uniqueId, entityId);
	let stored = 'INSERT INTO board_user_bridge (user_uuid,board_id) VALUES (?,?);';

	try {
		let addition = await db.raw(stored, [ uniqueId, entityId ]);
		return addition;
	} catch (customError) {
		throw new RepositoryError('insertUserIntoEntityBridge', customError.message);
	}
}

module.exports = insertUserIntoEntityBridge;
