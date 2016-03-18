const _ = require('lodash');
const helpers = require('../config/helpers');
const Destination = require('./destinations');
const Trip = require('../trips/trips');

module.exports = {
  // Params: req.body.destinations is an array of destination objects.
  // Returns: array of created destinations
  createAll: (req, res, next) => {
    Destination.createDestinations(req.body.destinations, req.params.tripId)
    .then(destinations => {
      res.status(201).json(destinations);
    })
    .catch((err) => {
      helpers.errorHandler(err, req, res, next);
    });
  },

  get: (req, res, next) => {
    // TODO
    res.end();
  },

  getAll: (req, res, next) => {
    Destination.getDestinations(req.params.tripId)
    .then(destinations => {
      res.json(destinations);
    })
    .catch(err => {
      helpers.errorHandler(err, req, res, next);
    });
  },

  update: (req, res, next) => {
    // TODO
    res.end();
  },

  delete: (req, res, next) => {
    Destination.deleteDestination(req.params.destId)
    .then(() => {
      res.end();
    })
    .catch((err) => {
      helpers.errorHandler(err, req, res, next);
    });
  },
};
