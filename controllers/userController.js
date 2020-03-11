const db = require("../models");
const bcrypt = require("bcryptjs")

// Defining methods for the booksController
module.exports = {
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },  
  create: function(req, res) {
    console.log(req.body.pass)
    const {firstName, lastName, email, password} = req.body
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    const newUser = new User({firstName, lastName, email, password: hashedPassword})

    db.User
      .save()
      .then(dbModel => res.json(dbModel))
      .catch(err => {res.status(422).json({message: "That email is already taken"})});
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