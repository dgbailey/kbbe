const postUserToBoard = require('../../repositories/boards/postUserToBoard');
const ServiceError = require('../../utilities/errors/serviceError');

async function postUserToBoardService({ boardId, userId, ...rest }) {
	try {
		let userToBoard = await postUserToBoard(userId, boardId);
		return userToBoard;
	} catch (err) {
		throw new ServiceError('postUserToBoardService', err);
	}
}

module.exports = postUserToBoardService;
