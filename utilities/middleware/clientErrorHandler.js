function clientErrorHandler(err, req, res, next) {
	if (req.xhr) {
		res.status(500).send({ error: 'Something failed!' });
	} else {
		next(err);
	}
}

module.exports = clientErrorHandler;

//I think this will prevent DAO errors from being revealed to my client
