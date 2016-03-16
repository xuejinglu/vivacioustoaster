const db = require('../config/db');
const Sequelize = require('sequelize');

const User = db.define('users', {
  fbId: Sequelize.STRING,
  name: Sequelize.STRING,
  picUrl: Sequelize.STRING,
});

const UserFriend = db.define('friends', {});

User.belongsToMany(User, { as: 'friends', through: UserFriend });

UserFriend.sync();
User.sync();

module.exports = User;
