const _ = require('lodash');
const helpers = require('../config/helpers');
const Tag = require('./tags');

module.exports = {

  // Params: req.body.tags is an array of tag objects.
  // Returns: array of created tags
  createAll: (req, res, next) => {
    // extend tag objects with eventId from url param
    const eventIds = Array(req.body.tags.length).fill({ eventId: req.params.eventId });
    const newTags = _.merge(req.body.tags, eventIds);

    Tag.createTags(newTags)
      .then(tags => {
        res.status(201).json(tags);
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  getAll: (req, res, next) => {
    Tag.getTags(req.params.eventId)
      .then(tags => {
        res.json(tags);
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

};
