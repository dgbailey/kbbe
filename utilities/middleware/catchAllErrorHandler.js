function catchAllErrorHandler (err, req, res, next) {
  console.log(err);
    res.status(500).send({ error: 'Something Non client failed!' })
  }

module.exports = catchAllErrorHandler;

//does this reveal DAO errors to my client?