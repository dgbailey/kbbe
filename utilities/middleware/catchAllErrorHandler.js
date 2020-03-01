function catchAllErrorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
  }

module.exports = catchAllErrorHandler;

//does this reveal DAO errors to my client?