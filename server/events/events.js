const db = require('../config/db');
const Sequelize = require('sequelize');
const Destination = require('../destinations/destinations');

const Event = db.define('events', {
  // event: this will have many attrs
});

// creates destId column in events table
Event.belongsTo(Destination, { foreignKey: 'destId', constraints: false });

// will add methods to Destination (ex. Destination.getEvents())
Destination.hasMany(Event, { foreignKey: 'destId', constraints: false });

Event.sync();
Destination.sync();

Event.createEvents = events => Event.bulkCreate(events, { returning: true })
    .catch(err => err);

Event.getEvents = destId => Event.findAll({ where: { destId } })
    .catch(err => err);

module.exports = Event;
