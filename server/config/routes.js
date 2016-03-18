const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const usersController = require('../users/usersController');
const destinationsController = require('../destinations/destinationsController');
const eventsController = require('../events/eventsController');
const tagsController = require('../tags/tagsController');
const tripsController = require('../trips/tripsController');
const userController = require('../votes/votesController');

module.exports = function (app, express) {
  app.get('api/me', usersController.getUser);
  app.get('/api/me/friends', usersController.getFriends);
  app.post('/api/destination/:dest_id/tags', tagsController.createAll);
  app.get('/api/destinations/:dest_id/tags', tagsController.getAll);
  app.get('/api/trips', tripsController.getAll);
  app.get('/api/trips/:trip_id', tripsController.get);
  app.post('/api/trips', tripsController.create);
  app.get('/api/trips/:trip_id/users'/* , controller function here */);
  app.post('/api/trips/:trip_id/users'/* , controller function here */);
  app.post('/api/trips/:trip_id/destinations', destinationsController.createAll);
  app.get('/api/trips/:trip_id/destinations', destinationsController.getAll);
  app.delete('/api/destinations/:dest_id', destinationsController.getAll);
  app.post('/api/destinations/:dest_id/events', eventsController.createAll);
  app.get('/api/destinations/:dest_id/events', eventsController.getAll);
  app.get('/api/destinations/:dest_id/events/:event_id/votes'/* , controller function here */);
  app.post('/api/destinations/:dest_id/events/:event_id/votes'/* , controller function here */);
  app.delete('/api/votes/:vote_id'/* , controller function here */);

// FACEBOOK AUTH
  app.get('/auth/facebook',
    passport.authenticate('facebook', { scope: ['user_friends', 'email'] }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
      // send user info to client side via cookies
      // example: res.cookie('name', req.user.displayName);
    });
};
