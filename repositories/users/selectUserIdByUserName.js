const db = require('../../dbConfig');
const RepositoryError = require('../../utilities/errors/repositoryError');

async function selectUserIdByUserName(username) {
	try {
		//grab user id by username
		let userUuid = await db('users').where({ username: username });
		return userUuid;
	} catch (customError) {
		throw new RepositoryError('shareBoardByUserName', customError.message);
	}
}

module.exports = selectUserIdByUserName;
