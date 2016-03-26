'use strict'; // eslint-disable-line
const pg = require('pg');
const Sequelize = require('sequelize');
let db;

if (process.NODE_ENV === 'production') {
  db = new Sequelize(process.env.DATABASE_URL);
} else {
  db = new Sequelize('voyager', null, null, {
    dialect: 'postgres',
    define: {
      underscored: false,
    },
  });
}

module.exports = db;
