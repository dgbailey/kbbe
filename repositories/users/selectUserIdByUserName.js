const db = require('../../dbConfig');
const RepositoryError = require('../../utilities/errors/repositoryError');

async function selectUserIdByUserName(username) {
	try {
		//grab user id by username
		let userUuid = await db('users').where({ username: username });
	} catch (error) {
		throw new RepositoryError('shareBoardByUserName', error.message);
	}
}
