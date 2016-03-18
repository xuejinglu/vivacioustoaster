const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const db = require('./config/db.js');
const User = require('./users/users');
const auth = require('./config/auth.js');


require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.set('port', PORT);
app.listen(PORT);
console.log(`Listening on port ${app.get('port')}`);

// PASSPORT FACEBOOK STRATEGY configuration=================

// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.

passport.use(new Strategy({
  clientID: process.env.FACEBOOK_APP_ID || auth.facebookAuth.clientID,
  clientSecret: process.env.FACEBOOK_SECRET || auth.facebookAuth.clientSecret,
  callbackURL: `http://localhost:${PORT}/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'picture.height(150).width(150)', 'friends'],
},
  (accessToken, refreshToken, profile, cb) => {
    // call a function which checks if user is in db
    User.findOrCreate(profile);
    return cb(null, profile);
  }));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Twitter profile is serialized
// and deserialized.
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

module.exports = app;
