const db = require('../config/db');
const jwt = require('jwt-simple');
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

User.getUserInfo = fbId => {
  User.find({ where: { fbId } })
    .then(user => {
      const token = jwt.encode(user, 'secret');
      const response = {
        user,
        token,
      };
      return response;
    })
    .catch(err => err);
};

User.getUserFriends = userId => {
  User.find({
    where: { id: userId },
    include: [{ model: User, as: 'Friends' }],
  })
  .then(user => user.Friends)
  .catch(err => err);
};

User.findOrCreate = profile => {
  const name = profile.displayName;
  const picture = profile.photos[0].value;
  const fbId = {
    fbId: profile.id,
  };
  User.findOne(fbId)
    .then(match => {
      // create user if there's no match
      if (!match) {
        const newUser = {
          name,
          fbId,
          picture,
        };
        return User.create(newUser);
      }
      // if user already exists, update user entry in the database
      const updatedInfo = {
        name,
        picture,
      };
      return match.update(updatedInfo)
      .then(data => data)
      .catch(error => { console.error('findOrCreate error: ', error); });
    })
    .catch(error => {
      console.error('findOrCreate error: ', error);
    });
};

UserFriend.sync();
User.sync();

module.exports = User;
