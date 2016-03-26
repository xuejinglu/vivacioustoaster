const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const destinationsController = require('../destinations/destinationsController');
const eventsController = require('../events/eventsController');
const tripsController = require('../trips/tripsController');
const placeSearchController = require('../placeSearch/placeSearchController');
const usersController = require('../users/usersController');
const User = require('../users/users');
const helper = require('./helpers');

module.exports = function (app, express) {
  // Users
  app.use('/api/me', helper.decode);
  app.get('/api/me', usersController.getUser);
  app.get('/api/me/friends', usersController.getFriends);
  app.get('/api/trips/:tripId/users', usersController.getTravelFriends);

  // Trips
  app.use('/api/trips', helper.decode);
  app.get('/api/trips', tripsController.getAll);
  app.get('/api/trips/:tripId', tripsController.get);
  app.delete('/api/trips/:tripId', tripsController.delete);
  app.post('/api/trips', tripsController.create);
  app.post('/api/trips/:tripId/users'/* , controller function here */);

  // Destinations
  app.post('/api/trips/:tripId/destinations', destinationsController.createAll);
  app.get('/api/trips/:tripId/destinations', destinationsController.getAll);
  app.delete('/api/destinations/:destId', destinationsController.delete);

  // Events
  app.post('/api/destinations/:destId/events', eventsController.createAll);
  app.get('/api/destinations/:destId/events', eventsController.getAll);

  // Votes
  app.get('/api/destinations/:destId/events/:eventId/votes'/* , controller function here */);
  app.post('/api/destinations/:destId/events/:eventId/votes'/* , controller function here */);
  app.delete('/api/votes/:voteId'/* , controller function here */);

  // Google Places
  app.post('/api/placeSearch', placeSearchController.search);

// FACEBOOK AUTH
  app.get('/auth/facebook',
    passport.authenticate('facebook', { scope: ['user_friends', 'email'] }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
      User.createToken(req.user.id)
      .then(response => {
        res.cookie('token', response.token);
        res.redirect('/');
      });
    });
};
