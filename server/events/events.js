const db = require('../config/db');
const Sequelize = require('sequelize');
const Destination = require('../destinations/destinations');

const Event = db.define('events', {
  // event: this will have many attrs
});

// creates destId column in events table
Event.belongsTo(Destination, { foreignKey: 'destId' });

// will add methods to Destination (ex. Destination.getEvents())
Destination.hasMany(Event);

Event.sync();
Destination.sync();

module.exports = Event;
