const localStrategy = require('passport-local').Strategy
const User = require('../models/User')


const strategy = new localStrategy(
  {
    usernameField: 'username'
  },
  (email, password, done) => {
    User.findOne({'local.username': username}, (err, userMatch) => {
      if(err) {
        return done(err)
      }
      if(!userMatch) {
        return done(null, false, {message: "Incorrect username"})
      }
      if(!userMatch.checkPassword(password)) {
        return done(null, false, {message: "Incorrent password"})
      }
      return done(null, userMatch)
    })
  }
)

module.exports = strategy