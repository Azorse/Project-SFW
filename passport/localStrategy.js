const localStrategy = require('passport-local').Strategy
const db = require('../models')
const bcrypt = require("bcryptjs")


const strategy = new localStrategy({ usernameField: "email" }, (email, password, done) => {
    // Match user
    db.User.findOne({ email: email }).then(user => {
      if (!user) {
        return done(null, false, { message: "That email is not registered" });
      }
      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
      });
    });
});

module.exports = strategy