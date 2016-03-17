module.exports = {
  errorLogger: (err, req, res, next) => {
    // log the error then send it to the next middleware in
    console.error(err.stack);
    next(err);
  },
  errorHandler: (err, req, res, next) => {
    // send error message to client
    // message for graceful error handling on app
    res.status(500).send({ error: err.message });
  },
};
