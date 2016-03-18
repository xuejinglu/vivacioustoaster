import expect from 'expect';
import Promise from 'bluebird';
import Sequelize from 'sequelize';
import db from '../config/db';
import User from '../users/users';
import testData from './testData';

// The `clearDB` helper function, when invoked, will clear the database
// by dropping the db - this is what the { force: true } is for
const clearDB = () => Promise.all([
  User.sync({ force: true }),
  Trip.sync({ force: true }),
  Destination.sync({ force: true }),
  Event.sync({ force: true }),
  Tag.sync({ force: true }),
]);

const testUsers = testData.testUsers;

describe('User Model', () => {
  beforeEach(() => clearDB().then(() => 
    Promise.all(testUsers.map(user => UserController.createOne(user)))));

  it('should have a method that retrieves a user from the database', () => {
    User.getUserInfo('reg-9gf-sf2').then(response => {
      expect(response.user).to.equal({
        name: 'Akshay Buddiga',
        picUrl: 'akshay.jpg',
        fbId: 'reg-9gf-sf2',
      });
    });
  });

  it('should have a method that retrieves a user\s friends from the database', () => {
    User.getUserFriends(testUsers[1]).then(user => {
      expect(user).to.deep.equal({
        name: 'Boya Jiang',
        picUrl: 'boya.jpg',
        fbId: 'ad7-lr0-fd8',
      });
    });
  });

  it('should have a method that creates or updates a user in the database', () => {
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

});
