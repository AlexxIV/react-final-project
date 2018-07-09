const jwt = require('jsonwebtoken')
const User = require('../models/User')
const PassportLocalStrategy = require('passport-local').Strategy

module.exports = new PassportLocalStrategy({
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  User.findOne({ username: username }).then((existingUser) => {
    if(!existingUser) {
      const error = new Error ('Incorrect username or password')
      error.name = 'IncorrectCredentialsError'

      return done(error)
    }

    const isMatch = existingUser.password === password

    if (!isMatch) {
      const error = new Error('Incorrect username or password')
      error.name = 'IncorrectcredentialsError'

      return done(error)
    }

    const payload = {
      sub: existingUser._id
    }

    const token = jwt.sign(payload, 'Hip3R S3Cr3T R4nD0M Str1nG')
    const data = {
      username: existingUser.username,
      id: existingUser._id,
      isAdmin: existingUser.isAdmin
    }

    return done(null, token, data)
  })
})