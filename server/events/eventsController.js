const Event = require('./events');

module.exports = {

  getTags: (req, res) => {
    const eventId = req.params.eventId;
    Event.findOne({ where: { eventId } })
      .then((event) => {
        res.json(event.getTags());
      });
  },

};
