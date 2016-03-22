const _ = require('lodash');
const helpers = require('../config/helpers');
const Trip = require('../trips/trips');

module.exports = {
  // Params: req.body has a trip name and friends. Req.user injected via jwt
  // Returns: created trip
  create: (req, res, next) => {
    Trip.createTrip(req.body.name, req.user, req.body.friends, 
    req.body.destination, req.body.tripType)
      .then(trip => {
        res.status(201).json(trip);
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
    Trip.deleteTrip(req.params.tripId)
      .then(() => res.end())
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },
};
