import expect from 'expect';
import Promise from 'bluebird';
import Sequelize from 'sequelize';
import db from '../config/db';
import User from '../users/users';
import UserController from '../users/usersController';
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
describe('User Controller', () => {
  beforeEach(() => clearDB().then(() => 
    Promise.all(testUsers.map(user => UserController.createOne(user)))));

  it('should have a method that retrieves a user from the database', () => {
    User.getUser()
  });

  it('should have a method that retrieves a user\s friends from the database', () => {
    // Your code here! 
    // Hint: Research how to write asynchronous tests using promises with mocha
  });

});
