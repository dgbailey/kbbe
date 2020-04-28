const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
require('dotenv').config();

function generateToken(user) {
	const secret = process.env.JWT_SECRET;
	const payload = {
		uuid: user.userUuid,
		username: user.userName
	};
	const options = {
		expiresIn: '30s'
	};

	return jwt.sign(payload, secret, options);
}

module.exports = { router, generateToken };
