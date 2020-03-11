const bcrypt = require('bcryptjs');

function validatePassword(reqObjectPassword, storedPasswordHash) {
	if (bcrypt.compareSync(reqObjectPassword, storedPasswordHash)) {
		return true;
	}
	return false;
}

module.exports = validatePassword;
