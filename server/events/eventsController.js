const _ = require('lodash');
const helpers = require('../config/helpers');
const Event = require('./events');
const Tag = require('../tags/tags');

module.exports = {

  // Params: req.body.events is an array of event objects.
  // Returns: array of created events
  createAll: (req, res, next) => {
    // extend event objects with destId from url param
    const destIds = Array(req.body.events.length).fill({ destId: req.params.destId });
    const newEvents = _.merge(req.body.events, destIds);

    Event.bulkCreate(newEvents)
      .then((events) => {
        res.json(events);
      })
      .catch((err) => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  getAll: (req, res, next) => {
    Event.findAll({ where: { destId: req.params.destId } })
      .then((events) => {
        res.json(events);
      })
      .catch((err) => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  delete: (req, res, next) => {
    Event.destroy({ where: { id: req.params.destId } })
      .then(() => {
        res.end();
      })
      .catch((err) => {
        helpers.errorHandler(err, req, res, next);
      });
  },

};
