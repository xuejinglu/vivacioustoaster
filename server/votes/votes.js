const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');
const Event = require('../events/events');

const Vote = db.define('votes', {});

Vote.belongsTo(User);
Vote.belongsTo(Event);

Vote.sync();

module.exports = Vote;
