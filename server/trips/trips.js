const db = require('../config/db');
const Sequelize = require('sequelize');
const User = require('../users/users');
const Destination = require('../destinations/destinations');

const Trip = db.define('trips', {
  name: Sequelize.STRING,
  tripType: Sequelize.STRING,
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

Trip.createTrip = (name, user, friends, destination, tripType) =>
  Trip.create({ name, tripType })
    .then(trip =>
      Destination.createDestinations(destination)
        .then(destinations => Trip.addDestionations(destinations)
          .then(() => trip.addUsers([...friends, user])
            .then(() => trip))))
    .catch(err => err);

Trip.getAllTrips = user => user.getTrips().catch(err => err);

Trip.deleteTrip = id => Trip.destroy({ where: { id } }).catch(err => err);

module.exports = Trip;
