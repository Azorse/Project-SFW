const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwtSecret = require('./jwtConfig');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/User');


// passport.use(
//   'local',
//   new LocalStrategy(
//     {
//       usernameField: 'username',
//       passwordField: 'password',
//       session: false,
//     },
//     (username, password, done) => {
//       User.findOne({email : email})
//         .then(user => {
//           if (user === null) {
//             return done(null, false, { message: 'bad username' });
//           }
//           bcrypt.compare(password, user.password).then(response => {
//             if (response !== true) {
//               console.log('passwords do not match');
//               return done(null, false, { message: 'passwords do not match' });
//             }
//             console.log('user found & authenticated');
//             return done(null, user);
//           });
//         });
//     },
// ))

// const opts = {
//   jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
//   secretOrKey: jwtSecret.secret,
// };

// passport.use(
//   'jwt',
//   new JWTstrategy(opts, (jwt_payload, done) => {
//     User.findOne({id: jwt_payload.id})
//       .then(user => {
//         if (user) {
//           console.log('user found in db in passport');
//           done(null, user);
//         } else {
//           console.log('user not found in db');
//           done(null, false);
//         }
//       });
//   }),
// );










































module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({email: email})
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};


