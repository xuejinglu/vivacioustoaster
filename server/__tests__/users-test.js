'use strict';
const expect = require('expect');
const Promise = require('bluebird');
const User = require('../users/users');
// const Trip = require('../trips/trips');
// const Destination = require('../destinations/destinations');
// const Event = require('../events/events');
// const Tag = require('../tags/tags');
const testData = require('./testData');

// The `clearDB` helper function, when invoked, will clear the database
// by dropping the db - this is what the { force: true } is for
const clearDB = () => Promise.all([
  User.sync({ force: true }),
  // Trip.sync({ force: true }),
  // Destination.sync({ force: true }),
  // Event.sync({ force: true }),
  // Tag.sync({ force: true }),
]);

const testUsers = testData.testUsers;

describe('User Model', () => {
  beforeEach(() => clearDB().then(() => 
    Promise.all(testUsers.map(user => User.create(user)))));

  it('should retrieve a user from the database', () => {
    User.getUserInfo('reg-9gf-sf2').then(response => {
      expect(response.user.name).to.equal('Akshay Buddiga');
    });
  });


  it('should create a user in the database', () => {
    const profile = {
      displayName: testUsers[2].name,
      photos: [{ value: testUsers[2].picUrl }],
      id: testUsers[2].fbId,
    };

    User.findOrCreate(profile).then(user => {
      expect(user.name).to.equal(profile.displayName);
    });
  });

  it('should update a user in the database', () => {
    let profile = testUsers[2];

    // checks that it creates a new user
    User.findOrCreate(profile).then(user => {
      expect(user.name).to.equal(profile.name);
    });

    profile[name] = 'Firer Leran';

    // checks that it updates a new user
    User.findOrCreate(profile).then(user => {
      expect(user.name).to.equal(profile.name);
    });
  });

  xit('should retrieve a user\s friends from the database', () => {
    User.getUserFriends(testUsers[1]).then(user => {
      expect(user.name).to.equal('Boya Jiang');
    });
  });

});
