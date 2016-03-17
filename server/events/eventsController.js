const _ = require('lodash');
const helpers = require('../config/helpers');
const Event = require('./events');
const Tag = require('../tags/tags');

module.exports = {

  // Params: req.body.tags is an array of tag objects.
  // Returns: array of created tags
  createTags: (req, res, next) => {
    // extend tag objects with eventId from url param
    const eventIds = Array(req.body.tags.length).fill({ eventId: req.params.eventId });
    const newTags = _.merge(req.body.tags, eventIds);

    Tag.bulkCreate(newTags)
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => {
      helpers.errorHandler(err, req, res, next);
    });
  },

  getTags: (req, res, next) => {
    Event.findOne({ where: { id: req.params.eventId } })
      .then((event) => {
        // after we've selected the correct event, get it's tags with
        // the Sequelize method given to us by the hasMany relationship
        res.json(event.getTags());
      })
      .catch((err) => {
        helpers.errorHandler(err, req, res, next);
      });
  },

  deleteTag: (req, res, next) => {
    Tag.findOne({ where: { id: req.params.tagId } })
      .then((tag) => {
        // deletes the tag from the db
        tag.destroy();
      })
      .catch((err) => {
        helpers.errorHandler(err, req, res, next);
      });
  },

};
