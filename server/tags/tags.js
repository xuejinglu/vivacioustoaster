const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/user');
const Event = require('../events/events');

const Tag = db.define('tags', {
  name: Sequelize.STRING,
});

// creates eventId column in tags table
Tag.belongsTo(Event);

Tag.sync();

module.exports = Tag;
