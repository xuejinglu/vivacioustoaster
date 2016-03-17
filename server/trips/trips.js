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

// creates relationship to use User.getTrips()
// creates relationship to use Trip.getUsers()
User.hasMany(Trip);
Trip.hasMany(User);


UserTrip.sync();
Trip.sync();
User.sync();

module.exports = Trip;
