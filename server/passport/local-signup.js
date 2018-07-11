const PassportLocalStrategy = require('passport-local').Strategy
const User = require('../models/User');
const Encryption = require('../utilities/encryption');

module.exports = new PassportLocalStrategy({
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
    let salt = Encryption.generateSalt();
    let passwordHash = Encryption.generateHashedPassword(salt, password);
    let userData = {
      username: username,
      password: passwordHash,
      salt: salt
    }
    User.create(userData, (err) => {
      if (err) {
        return done (err);
      }
      return done (null)
    })
  }
)
