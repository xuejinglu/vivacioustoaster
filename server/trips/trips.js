const db = require('../config/db');
const Sequelize = require('sequelize');

const Trip = db.define('trips', {
  name: Sequelize.STRING,
});

Trip.sync();

module.exports = Trip;
