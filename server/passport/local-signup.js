const PassportLocalStrategy = require('passport-local').Strategy
const User = require('../models/User');
const encryption = require('../utilities/encryption');

module.exports = new PassportLocalStrategy({
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
    let userData = {
      username: username,
      password: password
    }
    User.create(userData, (err) => {
      if (err) {
        return done (err);
      }
      return done (null)
    })
  }
)
