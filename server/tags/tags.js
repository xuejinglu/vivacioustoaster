const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/user');
const Event = require('../events/events');

const Tag = db.define('tags', {
  name: Sequelize.STRING,
});

Tag.belongsTo(User);
Tag.belongsTo(Event);

Tag.sync();

module.exports = Tag;
