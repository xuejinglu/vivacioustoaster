const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');
const Event = require('../events/events');

const Tag = db.define('tags', {
  name: Sequelize.STRING,
});

// creates eventId column in tags table
Tag.belongsTo(Event);

// creates relationship to use Event.getTags()
Event.hasMany(Tag);

Tag.sync();
Event.sync();

module.exports = Tag;
