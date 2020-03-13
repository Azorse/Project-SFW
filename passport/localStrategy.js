const localStrategy = require('passport-local').Strategy
const db = require('../models')
const bcrypt = require("bcryptjs")


const strategy = new localStrategy({ usernameField: "email" }, (email, password, done) => {
    console.log(`looking in db`)
    // Match user
    db.User.findOne({ email: email }).then(err, user => {
      if (err) {
        console.log(err);
        return done(err)
      }
      if (!user) {
        return done(null, false, {message: "User not found"});
      }
      if (!user.validPassword(password, user.password)) {
        return done(null, false, {message: "invalid password"});
      } else {
        return done(null, user)
      }
    });
});

module.exports = strategy