const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findById: function(req, res) {
    db.Quiz
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },  
  create: function(req, res) {
    console.log(req.body)
    xsdb.Quiz
      .then(dbModel => res.json(dbModel))
      .catch(err => {res.status(422).json({message: "idk"})});
  },
  update: function(req, res) {
    db.Quiz
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Quiz
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};