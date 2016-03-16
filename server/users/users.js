const db = require('../config/db');
const Sequelize = require('sequelize');

const User = db.define('users', {
  fbId: Sequelize.STRING,
  name: Sequelize.STRING,
  picUrl: Sequelize.STRING,
});

User.sync();

module.exports = User;
