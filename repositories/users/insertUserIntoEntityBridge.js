const db = require('../../dbConfig');
const RepositoryError = require('../../utilities/errors/repositoryError');

async function insertUserIntoEntityBridge(uniqueId, entityId) {
	try {
		let addition = await db('board_user_bridge').insert({ user_uuid: uniqueId, board_id: entityId }, [
			'user_uuid',
			'board_id'
		]);
		return addition;
	} catch (customError) {
		throw new RepositoryError('insertUserIntoEntityBridge', customError.message);
	}
}
