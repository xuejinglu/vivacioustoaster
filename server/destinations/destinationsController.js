const _ = require('lodash');
const Destination = require('./destinations');
const Trip = require('../trips/trips');

module.exports = {
  // Params: req.body is an array of destination objects.
  // Returns: array of created destinations
  createAll: (req, res) => {
    // extend destination objects with tripId from url param
    const tripIds = Array(req.body.length).fill({ tripId: req.params.tripId });
    const newDestinations = _.merge(req.body, tripIds);

    Destination.bulkCreate(newDestinations)
    .then((destinations) => {
      res.json(destinations);
    });
  },

  get: (req, res) => {
    res.end();
  },

  getAll: (req, res) => {
    Destination.findAll({ where: { tripId: req.params.tripId } })
    .then((destinations) => {
      res.json(destinations);
    });
  },

  update: (req, res) => {
    res.end();
  },

  delete: (req, res) => {
    res.end();
  },
};
