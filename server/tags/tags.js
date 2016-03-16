const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/user');
const Event = require('../events/events');

const Tag = db.define('tags', {
  name: Sequelize.STRING,
});

// creates userId column in tags table
// creates eventId column in tags table
Tag.belongsTo(User);
Tag.belongsTo(Event);

Tag.sync();

module.exports = Tag;
