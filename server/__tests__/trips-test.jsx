import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import User from '../users/users';
import Trip from '../trips/trips';
import { testUsers, testTrips } from './testData';

describe('Trip Model', () => {
  before(() => {
    // don't still need to connect to db...
  });
  beforeEach(done => {
    // drop table and recreate it
    // Trip.sync({ force: true });
    // User.sync({ force: true })
    //   .then(done => {
    //     return User.bulkCreate(testUsers);
    //   })
    //   .then(users => Trip.bulkCreate(testTrips))
    //   .then(trips => {
    //     return trips[0].addUsers(testUsers)
    //       .then(() => trips[1].addUsers(testUsers))
    //   })
    //   .then(() => done())
    //   .catch(err => done(err));
  });

  it('creates a new trip', () => {
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
