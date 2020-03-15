const bcrypt = require("bcryptjs")
const db = require("../models");
const passport = require("../passport/passport")


// Defining methods
module.exports = {
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },  
  create: function(req, res) {
    console.log(req.body)
    const {firstName, lastName, email, password} = req.body
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    let newUser = {firstName, lastName, email, password: hashedPassword}
    console.log(newUser)
    db.User
      .create(newUser)
      .then(dbModel => res.json(dbModel))
      .catch(err => {res.status(422).json({message: "That email is already taken"})});
  },
  login: function(req, res, next) {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next);
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  logOut: function(req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  }

};