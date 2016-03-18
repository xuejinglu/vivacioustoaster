const expect = require('expect');
const Promise = require('bluebird');
const User = require('../users/users');
const Trip = require('../trips/trips');
const testData = require('./testData');

const clearDB = () => {
  return Promise.all([
    () => User.sync({ force: true }),
    () => Trip.sync({ force: true }),
  ]);
};

describe('Trip Model', () => {
  before(() => {
    // don't still need to connect to db...
  });
  beforeEach(() => {
    // return clearDB()
    //   .then(() => {
    //     const createUsers = () => User.bulkCreate(testUsers);
    //     const createTrips = () => Trip.bulkCreate(testTrips);
    //     return Promise.all([createUsers, createTrips]);
    //   })
    //   .then(array => {
    //     const [users, trips] = array;
    //     return Promise.all(trips.map(trip => trip.addUsers(users)));
    //   })
    //   .then(() => done())
    //   .catch(err => console.error(err));
  });

  it('creates a new trip with friends', () => {
    console.log('hello');
    // const me = testUsers[0];
    // Trip.create('HR39', me, testUsers.slice(1))
    //   .then(trip => Trip.findOne({ where { id: trip.id } }))
    //   .then(trip => {
    //     expect(trip.name).to.equal('HR39');
    //     done();
    //   })
    //   .catch(err => done(err));
  });

  it('creates relationship between trip and users', () => {
    // const me = testUsers[0];
    // Trip.create('HR39', me, testUsers.slice(1))
    //   .then(trip => trip.getUsers())
    //   .then(users => {
    //     expect(users).to.have.lengthOf(4);
    //     done();
    //   })
    //   .catch(err => done(err));
  });

  it('gets a trip', () => {
    // TODO
  });

  it('deletes a trip', () => {
    // TODO
  });
});
