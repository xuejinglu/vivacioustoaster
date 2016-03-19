const expect = require('expect');
const Promise = require('bluebird');
const rp = require('request-promise');
const User = require('../users/users');
// const Trip = require('../trips/trips');
// const Destination = require('../destinations/destinations');
// const Event = require('../events/events');
// const Tag = require('../tags/tags');
const UserController = require('../users/usersController');
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
describe('User Controller', () => {

  beforeEach(() => clearDB().then(() =>
    Promise.all(testUsers.map(user => UserController.createOne(user)));
    // User.findOne({ where : {name: 'Leran Firer' }})
    //   .then(user => {
    //     User.findOne({ where : {name: 'Akshay Buddiga' }})
    //       .then(friend => user.addFriends(friend));
    //   });
  ));

  xit('should retrieve a user from the database', () => {
    // const options = {
    //   method: 'GET',
    //   uri: 'api/me',
    //   query: {
    //     fbId: 'qw0-lm1-pt8',
    //   },
    // };

    // rp(options).then(user => {
    //   expect(user.name).to.equal('Jing Lu');
    // });
  });

  xit('should retrieve a user\s friends from the database', () => {
    // const options = {
    //   method: 'GET',
    //   uri: 'api/me/friends',
    //   user: testUsers[1],
    // };

    // rp(options).then(friends => {
    //   expect(friends[0].name).to.deep.equal('Boya Jiang');
    // });
  });

});
