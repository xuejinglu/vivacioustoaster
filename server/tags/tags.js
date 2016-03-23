const db = require('../config/db');
const Sequelize = require('sequelize');
const Event = require('../events/events');

const Tag = db.define('tags', {
  name: Sequelize.STRING,
});

// creates eventId column in tags table
Tag.belongsTo(Event, { constraints: false });

// will add methods to Event (ex. Event.getTags())
Event.hasMany(Tag, { constraints: false });

Tag.sync();
Event.sync();

Tag.createTags = tags => Tag.bulkCreate(tags)
    .catch(err => err);

Tag.getTags = eventId => Event.findOne({ where: { id: eventId } })
    // Sequelize method given to us by the hasMany relationship
    .then(event => event.getTags())
    .catch(err => err);

module.exports = Tag;
