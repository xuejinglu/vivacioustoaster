const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');

const Trip = db.define('trips', {
  name: Sequelize.STRING,
});

const UserTrip = db.define('userTrips', {
  viewed: Sequelize.BOOLEAN,
});

// creates tripId column in userTrips join table
// creates userId column in userTrips join table
User.belongsToMany(Trip, { through: UserTrip });
Trip.belongsToMany(User, { through: UserTrip });

Trip.sync();
User.sync();
UserTrip.sync();

module.exports = Trip;
