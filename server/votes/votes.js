const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');

const Vote = db.define('votes', {});

// creates userId column in votes table
// creates eventId column in votes table
Vote.belongsTo(User, { constraints: false });
Vote.belongsTo(Event, { constraints: false });

// will add methods to User (ex. User.getEvents())
// will add methods to Event (ex. Event.getVotes())
User.hasMany(Vote, { constraints: false });
Event.hasMany(Vote, { constraints: false });

Vote.sync();
User.sync();
Event.sync();

Vote.createVotes = votes => Vote.bulkCreate(votes, { returning: true })
  .catch(err => err);

Vote.deleteVote = id => Vote.destroy({ where: { id } })
  .catch(err => err);

module.exports = Vote;
