const db = require('../config/db');
const Sequelize = require('sequelize');
const Trip = require('../trips/trips');

const Destination = db.define('destinations', {
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE,
  location: Sequelize.STRING,
});

Destination.belongsTo(Trip);
Destination.sync();

module.exports = Destination;
