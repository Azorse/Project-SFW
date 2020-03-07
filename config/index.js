const passport = require('passport')
const localStrategy = require('./localStrategy')
//const googleStrategy = require('./googleStrategy')
const User = require('../models/User')

passport.serializeUser((user, done) => {
  console.log(user)
  done(null, {_id: user._id})
})

passport.deserializeUser((user, done) => {
  User.findOne(
    {_id: id}, 
    'firstName lastName email', 
    (err, user) => {
      console.log(user)
      done(null, user)
  })
})

passport.use(localStrategy)
//passport.use(googleStratgey)

module.exports = passport