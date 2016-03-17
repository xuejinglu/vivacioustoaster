const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');
const Event = require('../events/events');

const Vote = db.define('votes', {});

// creates userId column in votes table
// creates eventId column in votes table
Vote.belongsTo(User);
Vote.belongsTo(Event);

// creates relationship to use User.getVotes()
// creates relationship to use Event.getVotes()
User.hasMany(Vote);
Event.hasMany(Vote);

Vote.sync();
User.sync();
Event.sync();

module.exports = Vote;
