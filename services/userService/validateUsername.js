const selectByUsername = require('../../repositories/users/selectByUserName');

async function validateUsername(username) {
	try {
		let user = await selectByUsername(username);
		if (!user) {
			return true;
		}
		return false;
	} catch (err) {
		throw new Error(`Server Error Validating Username: ${err}`);
	}
}

module.exports = validateUsername;
