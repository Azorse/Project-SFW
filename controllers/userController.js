const bcrypt = require("bcryptjs")
const db = require("../models");
const passport = require("../passport")



// Defining methods for the booksController
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
  userLogin: function(req, res, next) {
    console.log(req.body)
    const {email, password} = req.body
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    let thisUser = {email, password: hashedPassword}
    console.log(thisUser)

    passport.authenticate('local', {
      successRedirect: '/home',
      failureRedirect: '/login',
      failureFlash: true  
    })(req, res, next)
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
  }
};