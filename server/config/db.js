const pg = require('pg');
const Sequelize = require('sequelize');
const db = new Sequelize('tripsapp', null, null, {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

module.exports = db;
