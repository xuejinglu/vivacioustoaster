const db = require('../config/db');
const Sequelize = require('sequelize');
const Trip = require('../trips/trips');

const Destination = db.define('destinations', {
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE,
  location: Sequelize.STRING,
});

// creates tripId column in destinations table
Destination.belongsTo(Trip);

Destination.sync();

module.exports = Destination;
