const db = require('../config/db');
const Sequelize = require('sequelize');

const Event = db.define('events', {
  // event: this will have many attrs
});

Event.sync();

module.exports = Event;
