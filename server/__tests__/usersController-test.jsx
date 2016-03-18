const expect = require('chai').expect;
const Promise = require('bluebird');
const db = require('../config/db');
const User = require('../users/users');
const UserController = require('../users/usersController');

// Test user data
var testUsers = [
  {
    fbId: 'Orson Scott Card',
    name: 1954,
    picUrl: 'Richland, Washington',
  },
  {
    fbId: 'Orson Scott Card',
    name: 1954,
    picUrl: 'Richland, Washington',
  },
  {
    fbId: 'Orson Scott Card',
    name: 1954,
    picUrl: 'Richland, Washington',
  },
  {
    fbId: 'Orson Scott Card',
    name: 1954,
    picUrl: 'Richland, Washington',
  }
];

// The `clearDB` helper function, when invoked, will clear the database
// by dropping the db - this is what the { force: true } is for
var clearDB = function () {
  // this drops the db each time
  return User.sync({ force: true });
};

describe('User Controller', function () {

  beforeEach(function () {
    return clearDB()
      .then(() => {
        // Promise.all takes an array of promises and only
        // completes when all promises have been fulfilled
        return Promise.all(testUsers.map(user =>
          UserController.createOne(user);
        ));
      })
      .then(function(users) {
        // There's actually no need for this particular then 
        // block - it's just to show you how to turn the very 
        // bulky sequelize model into usable information 
        // Uncomment the console logs to see the difference!
        var formattedUsers = users.map(user =>
          user.toJSON();
        });
        // console.log(users);
        // console.log(formattedUsers);
      });
  });
  
  it('should have a method that retrieves all records from the database', function () {
    // Your code here! 
    // Hint: Research how to write asynchronous tests using promises with mocha
  });

  it('should have a method that creates a record in the database', function () {
    // Your code here! 
    // Hint: Research how to write asynchronous tests using promises with mocha
  });

});