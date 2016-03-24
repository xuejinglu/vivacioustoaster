const _ = require('lodash');
const helpers = require('../config/helpers');
const Trip = require('../trips/trips');
const Destination = require('../destinations/destinations');
const Event = require('../events/events');

module.exports = {
  // Params: req.body has a trip name and friends. Req.user injected via jwt
  // Returns: created trip
  create: (req, res, next) => {
    console.log(req.body.events);
    Trip.createTrip(req.body.name, req.body.tripType)
      .then(trip => {
        Destination.createDestinations(req.body.destinations)
          .then(destinations => {
            trip.addDestinations(destinations)
              // .then(() => {
                // Event.createEvents(req.body.events)
                  // .then(events => {
                    // destinations.forEach(destination => {
                      // destination.addEvents(events)
              .then(() => {
                res.status(201).json(trip);
              });
          });
      })
              // });
          // });
      // })
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
