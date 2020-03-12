//router
const express = require('express');
const router = express.Router();
const registerNewUser = require('../services/userService/registerNewUser');
const checkAuthorizationExpired = require('../utilities/middleware/checkAuthorizationExpired');
const getBoardMetaByUserId = require('../services/userService/loginPreflightStatus');
const loginUserService = require('../services/userService/loginUser');

router.post('/signup', async (req, res) => {
	//take body, extract creds, send creds to registration service, send appropriate response
	let body = req.body;
	console.log(body);
	try {
		let newUser = await registerNewUser(body);
		let { jwt, userName, userId } = newUser;
		res.cookie('kbt', jwt, { httpOnly: true });
		res.status(200).json({ userName, userId });
	} catch (err) {
		if (err.message === 'DUPLICATE_ID') {
			res.status(400).json(err.message);
		} else {
			res.status(500).json(err.message);
		}
		console.log(err.message);
	}
});

router.post('/login', async (req, res, next) => {
	console.log('response received');
	let { username, password } = req.body;

	try {
		let { jwt, userId } = await loginUserService(username, password);
		if (jwt) {
			let metaData = await getBoardMetaByUserId(userId);

			res.cookie('kbt', jwt, { httpOnly: true });
			res.status(200).json({ metaData, userId, username });
		} else {
			res.status(401).json('Username or password incorrect');
		}
	} catch (error) {
		next(error);
	}
});

router.get('/login/preflight', checkAuthorizationExpired, async (req, res) => {
	//checkAuthExpired middleware checks cookie status, appends user metadata to req for further processing

	let { uuid: userId } = req.user;
	console.log('userid', userId);

	try {
		let metaData = await getBoardMetaByUserId(userId);
		if (!metaData) {
			throw new Error('Server Error: Controller no board metadata');
		}
		let body = { userId, metaData };
		console.log(body);
		res.status(200).json(body);
	} catch (err) {
		throw new Error(`Server Error: user controller login preflight ${err}`);
	}
});

module.exports = router;
