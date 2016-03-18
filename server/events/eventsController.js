const _ = require('lodash');
const helpers = require('../config/helpers');
const Event = require('./events');

module.exports = {

  // Params: req.body.events is an array of event objects.
  // Returns: array of created events
  createAll: (req, res, next) => {
    // extend event objects with destId from url param
    const destIds = Array(req.body.events.length).fill({ destId: req.params.destId });
    const newEvents = _.merge(req.body.events, destIds);

    Event.create(newEvents)
      .then(events => {
        res.json(events);
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  getAll: (req, res, next) => {
    Event.get(req.params.destId)
      .then(events => {
        res.json(events);
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  delete: (req, res, next) => {
    Event.delete(req.params.destId)
      .then(affectedRows => {
        res.end();
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

};
