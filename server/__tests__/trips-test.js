const expect = require('expect');
const Promise = require('bluebird');
const User = require('../users/users');
const Trip = require('../trips/trips');
const testData = require('./testData');

const clearDB = () => {
  return Promise.all([
    User.sync({ force: true }),
    Trip.sync({ force: true }),
  ]);
};

describe('Trip Model', () => {
  before(() => {
    // don't still need to connect to db...
  });
  beforeEach(() => {
    return clearDB()
      .then(() => {
        return Promise.all([
          User.bulkCreate(testData.testUsers, {returning: true}),
          Trip.bulkCreate(testData.testTrips, {returning: true}),
        ]);
      })
      .then(array => {
        const users = array[0];
        const trips = array[1];
        return Promise.all(trips.map(trip => trip.addUsers(users)));
      })
      .catch(err => console.error(err));
  });

  it('creates a new trip with friends', (done) => {
    User.findAll({ where: { id: { $gt: 0 } } })
      .then(users => {
        console.log('users: ', users);
        return Trip.createTripWithFriends('HR39', users[0], users.slice(1))
      })
      .then(trip => {
        expect(trip.name).toEqual('HR39');
        return trip.getUsers();
      })
      .then(users => {
        expect(users.length).toEqual(testData.testUsers.length);
        done();
      })
      .catch(err => done(err));
  });

  xit('creates relationship between trip and users', () => {
    // const me = testUsers[0];
    // Trip.create('HR39', me, testUsers.slice(1))
    //   .then(trip => trip.getUsers())
    //   .then(users => {
    //     expect(users).to.have.lengthOf(4);
    //     done();
    //   })
    //   .catch(err => done(err));
  });

  it('gets all trips given a user', (done) => {
    User.findOne({ where: { name: 'Akshay Buddiga' } })
    .then(user => Trip.getAllTrips(user))
    .then(trips => {
      expect(trips.length).toEqual(testData.testTrips.length);
      done();
    })
    .catch(err => done(err));
  });

  xit('deletes a trip', () => {
    // TODO
  });
});
