const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');
const Event = require('../events/events');

const Vote = db.define('votes', {});

// creates userId column in votes table
// creates eventId column in votes table
Vote.belongsTo(User);
Vote.belongsTo(Event);

// will add methods to User (ex. User.getEvents())
// will add methods to Event (ex. Event.getVotes())
User.hasMany(Vote);
Event.hasMany(Vote);

Vote.sync();
User.sync();
Event.sync();

module.exports = Vote;
