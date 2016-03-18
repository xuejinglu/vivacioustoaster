const _ = require('lodash');
const helpers = require('../config/helpers');
const Trip = require('../trips/trips');

module.exports = {
  // Params: req.body is a trip
  // Returns: created trip
  create: (req, res, next) => {
    Trip.createTrip(req.body.name, req.user, req.body.friends)
    .then(trip => {
      res.json(trip);
    })
    .catch(err => {
      helpers.errorHandler(err, req, res, next);
    });
  },

  get: (req, res, next) => {
    // TODO
    res.end();
  },

  getAll: (req, res, next) => {
    Trip.getAllTrips(req.user)
    .then(trips => {
      res.json(trips);
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

  },
};
