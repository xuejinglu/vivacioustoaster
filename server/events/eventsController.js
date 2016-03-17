const Event = require('./events');
const Tag = require('../tags/tags');

module.exports = {

  getTags: (req, res) => {
    const eventId = req.params.eventId;
    Event.findOne({ where: { eventId } })
      .then((event) => {
        res.json(event.getTags());
      });
  },

  createTags: (req, res) => {

  },

  deleteTag: (req, res) => {
    const tagId = req.params.tagId;
    Tag.findOne({ where: { tagId } })
      .then((tag) => {
        tag.destroy();
      });
  },

};
