const verifyLivingJwt = require('../auth/verifyLivingJwt');

function checkAuthorizationExpired(req, res, next) {
	let token = req.cookies.kbt;

	try {
		if (!token) {
			throw new Error('AUTH ERROR: No cookie found');
		}

		let decodedJwtSuccess = verifyLivingJwt(token);
		req.user = decodedJwtSuccess;
		next();
	} catch (err) {
		res.status(401).json(err.message);
	}
}

module.exports = checkAuthorizationExpired;
