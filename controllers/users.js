//router
const express = require('express');
const router = express.Router();
//registration service
const registerNewUser = require('../services/userService/registerNewUser');
const checkAuthorizationExpired = require('../utilities/middleware/checkAuthorizationExpired');
const getBoardMetaByUserId = require('../services/userService/loginPreflightStatus');

router.post('/signup', async (req, res) => {
	//take body, extract creds, send creds to registration service, send appropriate response
	let body = req.body;
	console.log(body);
	try {
		let newUser = await registerNewUser(body);
		console.log(newUser);
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

router.get('/login', async (req, res) => {
	//get get board meta by user id
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
