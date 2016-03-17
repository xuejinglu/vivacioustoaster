const _ = require('lodash');
const Destination = require('./destinations');
const Trip = require('../trips/trips');

module.exports = {
  // Params: req.body is an array of destination objects.
  // Returns: array of created destinations
  createAll: (req, res) => {
    // extend destination objects with tripId from url param
    const tripIds = Array(req.body.length).fill({tripId: req.params.trip_id});
    const destinations = _.merge(req.body, tripIds);

    Destination.bulkCreate(destinations)
    .then((destinations) => {
      res.json(destinations);
    });
  },

  get: (req, res) => {

  },

  getAll: (req, res) => {
    res.end();
  },

  update: (req, res) => {
    res.end();
  },

  delete: (req, res) => {
    res.end();
  },
};
