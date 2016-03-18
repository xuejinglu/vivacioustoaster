import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
// import db from '../config/db';
import User from '../users/users';
import Trip from '../trips/trips';

describe('Trip Model', () => {
  before(() => {
    // don't still need to connect to db...
  });
  beforeEach(() => {
    // drop table and recreate it
    Trip.sync({ force: true });
    User.sync({ force: true })
      .then(done => {
        const users = [
          {
            name: 'Akshay Buddiga',
            picUrl: 'akshay.jpg',
            fbId: 'reg-9gf-sf2',
          },
          {
            name: 'Boya Jiang',
            picUrl: 'boya.jpg',
            fbId: 'ad7-lr0-fd8',
          },
          {
            name: 'Leran Firer',
            picUrl: 'leran.jpg',
            fbId: 'of8-a6s-lf0',
          },
          {
            name: 'Jing Lu',
            picUrl: 'jing.jpg',
            fbId: 'qw0-lm1-pt8',
          },
        ];
        User.bulkCreate(users)
          .then(users => done());
      })
      .catch(err => err);
  });

  it('creates a new trip', () => {
    console.log(users);
  });

  it('gets a trip', () => {
    // TODO
  });

  it('deletes a trip', () => {
    // TODO
  });
});
