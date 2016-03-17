module.exports = {
  errorHandler: (err, req, res, next) => {
    console.error(err.stack);
    // send error message to client
    // message for graceful error handling on app
    res.status(500).send({ error: err.message });
  },
};
