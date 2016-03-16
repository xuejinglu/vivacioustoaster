module.exports = function (app, express) {
  app.get('/auth/facebook'/* , controller function here */);
  app.get('/auth/facebook/callback'/* , controller function here */);
  app.get('api/me'/* , controller function here */);
  app.get('/api/users/:user_id/friends'/* , controller function here */);
  app.post('/api/destination/:dest_id/tags'/* , controller function here */);
  app.get('/api/destinations/:dest_id/tags'/* , controller function here */);
  app.delete('/api/tags/:tag_id'/* , controller function here */);
  app.get('/api/trips'/* , controller function here */);
  app.get('/api/trips/:tag_id'/* , controller function here */);
  app.post('/api/trips'/* , controller function here */);
  app.get('/api/trips/:trip_id/users'/* , controller function here */);
  app.post('/api/trips/:trip_id/users'/* , controller function here */);
  app.post('/api/trips/:trip_id/destinations'/* , controller function here */);
  app.get('/api/trips/:trip_id/destinations'/* , controller function here */);
  app.delete('/api/destinations/:dest_id'/* , controller function here */);
  app.post('/api/destinations/:dest_id/events'/* , controller function here */);
  app.get('/api/destinations/:dest_id/events'/* , controller function here */);
  app.get('/api/destinations/:dest_id/events/:event_id/votes'/* , controller function here */);
  app.post('/api/destinations/:dest_id/events/:event_id/votes'/* , controller function here */);
  app.delete('/api/votes/:vote_id'/* , controller function here */);
};

