const db = require('../config/db');
const Sequelize = require('sequelize');

const Destination = db.define('destinations', {
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE,
  location: Sequelize.STRING,
});

Destination.sync();

module.exports = Destination;
