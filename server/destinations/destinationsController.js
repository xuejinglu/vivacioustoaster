const _ = require('lodash');
const helpers = require('../config/helpers');
const Destination = require('./destinations');
const Trip = require('../trips/trips');

module.exports = {
  // Params: req.body is an array of destination objects.
  // Returns: array of created destinations
  createAll: (req, res, next) => {
    // extend destination objects with tripId from url param
    const tripIds = Array(req.body.length).fill({ tripId: req.params.tripId });
    const newDestinations = _.merge(req.body, tripIds);

    Destination.bulkCreate(newDestinations)
    .then((destinations) => {
      res.json(destinations);
    })
    .catch((err) => {
      helpers.errorLogger(err, req, res, next);
      helpers.errorHandler(err, req, res, next);
    });
  },

  get: (req, res, next) => {
    res.end();
  },

  getAll: (req, res, next) => {
    Destination.findAll({ where: { tripId: req.params.tripId } })
    .then((destinations) => {
      res.json(destinations);
    })
    .catch((err) => {
      helpers.errorLogger(err, req, res, next);
      helpers.errorHandler(err, req, res, next);
    });
  },

  update: (req, res, next) => {
    res.end();
  },

  delete: (req, res, next) => {
    res.end();
  },
};
