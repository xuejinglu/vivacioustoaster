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
// will add methods to User (ex. User.getFriends())
User.belongsToMany(User, { as: 'Friends', through: UserFriend });

UserFriend.sync();
User.sync();

module.exports = User;
