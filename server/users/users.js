const db = require('../config/db');
const Sequelize = require('sequelize');

const User = db.define('users', {
  fbId: Sequelize.STRING,
  name: Sequelize.STRING,
  picUrl: Sequelize.STRING,
});

const UserFriend = db.define('friends', {});

User.belongsToMany(User, { as: 'friends', through: UserFriend });

User.sync();
UserFriend.sync();

module.exports = User;
