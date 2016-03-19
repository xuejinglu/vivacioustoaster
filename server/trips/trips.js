const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');

const Trip = db.define('trips', {
  name: Sequelize.STRING,
});

const UserTrip = db.define('userTrips', {
  viewed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

// creates tripId column in userTrips join table
// creates userId column in userTrips join table
// will add methods to User and Trip (ex. User.getTrips(), Trip.getUsers())
User.belongsToMany(Trip, { through: UserTrip });
Trip.belongsToMany(User, { through: UserTrip });

UserTrip.sync();
Trip.sync();
User.sync();

// Model functions

Trip.createTripWithFriends = (name, user, friends) =>
  Trip.create({ name })
    .then(trip =>
      trip.addUsers([...friends, user])
        .then(() => trip)
    )
    .catch(err => err);

Trip.getAllTrips = user => user.getTrips().catch(err => err);

Trip.deleteTrip = tripId => Trip.destroy({where: {id: tripId}}).catch(err => err);

module.exports = Trip;
