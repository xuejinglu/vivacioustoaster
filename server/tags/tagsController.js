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

    Tag.create(newTags)
      .then(tags => {
        res.json(tags);
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  getAll: (req, res, next) => {
    Tag.get(req.params.eventId)
      .then(tags => {
        res.json(tags);
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  delete: (req, res, next) => {
    Tag.delete(req.params.tagId)
      .then(affectedRows => {
        res.end();
      })
      .catch(err => {
        helpers.errorHandler(err, req, res, next);
      });
  },

};
