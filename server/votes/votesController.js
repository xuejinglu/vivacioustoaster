const _ = require('lodash');
const helpers = require('../config/helpers');
const Vote = require('./votes');
const Promise = require('bluebird');

module.exports = {
  // Params: req.body has votes, req.params has the eventId
  // Returns: created votes
  create: (req, res, next) => {
    Vote.createVotes(req.params.eventId, req.user)
      .then(votes => {
        res.status(201).json(votes);
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  getAll: (req, res, next) => {
    Vote.getAllVotes(req.params.eventId)
      .then(votes => {
        res.json(votes);
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  delete: (req, res, next) => {
    Vote.deleteVote(req.params.voteId)
      .then(() => res.end())
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

};
