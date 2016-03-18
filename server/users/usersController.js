const User = require('./users');
const helpers = require('../config/helpers');

module.exports = {

  getUser: (req, res, next) => {
    User.getUserInfo(req.query.fbId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      helpers.errorHandler(err, req, res, next);
    });
  },

  getFriends: (req, res, next) => {
    User.getUserFriends(req.params.id)
    .then(friends => {
      res.json(friends);
    })
    .catch(err => {
      helpers.errorHandler(err, req, res, next);
    });
  },

};
