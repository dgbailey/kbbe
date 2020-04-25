const insertUserIntoEntityBridge = require('../../repositories/users/insertUserIntoEntityBridge');
const selectUserIdByUserName = require('../../repositories/users/selectUserIdByUserName');
const ServiceError = require('../../utilities/errors/serviceError');

async function addUserAsBoardMember(userName, boardId) {
	try {
		let { user_uuid: userUuid } = await selectUserIdByUserName(userName);
		let newMember = await insertUserIntoEntityBridge(userUuid, boardId);
		return newMember;
	} catch (customError) {
		throw new ServiceError('addUserAsBoardMember', customError.message);
	}
}

module.exports = addUserAsBoardMember;
