const _ = require('lodash');
const helpers = require('../config/helpers');
const Event = require('./events');
const Tag = require('../tags/tags');

module.exports = {

  getTags: (req, res, next) => {
    Event.findOne({ where: { id: req.params.eventId } })
      .then((event) => {
        res.json(event.getTags());
      })
      .catch((err) => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  createTags: (req, res, next) => {

  },

  deleteTag: (req, res, next) => {
    Tag.findOne({ where: { id: req.params.tagId } })
      .then((tag) => {
        tag.destroy();
      })
      .catch((err) => {
        helpers.errorHandler(err, req, res, next);
      });
  },

};
