const Destination = require('./destinations');
const Trip = require('../trips/trips');

module.exports = {
  // Params: req.body is an array of destination objects.
  // Returns: array of created destinations
  createAll: (req, res) => {
    Destination.bulkCreate(req.body)
    .then( (destinations) => {
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
