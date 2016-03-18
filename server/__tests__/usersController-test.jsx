const expect = require('chai').expect;
const Promise = require('bluebird');
const Sequelize = require('sequelize');
const db = require('../config/db');
const User = require('../users/users');
const UserController = require('../users/usersController');


// The `clearDB` helper function, when invoked, will clear the database
// by dropping the db - this is what the { force: true } is for
const clearDB = () => {
  // this drops the db each time
  User.sync({ force: true });
};

describe('User Controller', () => {

  beforeEach(() => clearDB()
    .then(() => 
      // Promise.all takes an array of promises and only
      // completes when all promises have been fulfilled
      Promise.all(testUsers.map(user => UserController.createOne(user)));
    );
  });
  
  it('should have a method that retrieves all records from the database', () => {
    // Your code here! 
    // Hint: Research how to write asynchronous tests using promises with mocha
  });

  it('should have a method that creates a record in the database', () => {
    // Your code here! 
    // Hint: Research how to write asynchronous tests using promises with mocha
  });

});
