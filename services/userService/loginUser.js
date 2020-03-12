const validatePassword = require('../../utilities/auth/validatePassword');
const selectByUserName = require('../../repositories/users/selectByUserName');
const ServiceError = require('../../utilities/errors/serviceError');
const { generateToken } = require('../../utilities/auth/auth');
//check validate password
async function loginUserService(username, password) {
	try {
		let user = await selectByUserName(username);

		if (user.length === 0) {
			return false;
		} else {
			let { password: hashedPassword, username: userName, user_uuid: userId } = user[0];
			let passwordIsCorrect = validatePassword(password, hashedPassword);
			if (passwordIsCorrect) {
				let jwt = generateToken({ userName, userId });
				return { jwt, userId, userName };
			} else {
				return false;
			}
		}
	} catch (err) {
		throw new ServiceError('loginUserService', err);
	}
}

module.exports = loginUserService;
