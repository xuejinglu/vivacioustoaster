const db = require('../config/db');
const Sequelize = require('sequelize');

const User = db.define('users', {
  fbId: Sequelize.STRING,
  name: Sequelize.STRING,
  picUrl: Sequelize.STRING,
});

const UserFriend = db.define('friends', {});

// defines a self reference to user
// creates userId column in friends join table
// creates friendId column in friends join table
User.belongsToMany(User, { as: 'friend', through: UserFriend });

User.sync();
UserFriend.sync();

module.exports = User;
