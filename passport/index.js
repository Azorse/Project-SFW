const passport = require('passport')
const localStrategy = require('./localStrategy')
//const googleStrategy = require('./googleStrategy')
const User = require('../models')

passport.serializeUser((user, done) => {
  const sessionUser = { firstName: user.firstName, lastName: user.lastName, email: user.email}
  console.log(sessionUser)
  done(null, {sessionUser})
})

passport.deserializeUser((sessionUser, done) => {
    console.log(sessionUser)
    done(null, {firstName: sessionUser.firstName, lastName: sessionUser.lastName, email: sessionUser.email});
})

passport.use(localStrategy)
//passport.use(googleStratgey)

module.exports = passport