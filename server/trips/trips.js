const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');

const Trip = db.define('trips', {
  name: Sequelize.STRING,
});

const UserTrip = db.define('userTrips', {
  viewed: Sequelize.BOOLEAN,
});

User.belongsToMany(Trip, { through: UserTrip });
Trip.belongsToMany(User, { through: UserTrip });

Trip.sync();
UserTrip.sync();
User.sync();

module.exports = Trip;
