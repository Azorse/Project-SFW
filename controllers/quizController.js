const dbq = require("../models");
console.log(dbq)
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    dbq.Quiz
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findGryff: function(req, res) {
    dbq.Quiz
      .find(req.query)
      .where('houseName').equals("Gryffindor")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSlyth: function(req, res) {
    dbq.Quiz
      .find(req.query)
      .where('houseName').equals("Slytherin")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    dbq.Quiz
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  quizCheck: function(req, res) {
    dbq.Quiz
    .find(req.query)
    .then(dbModel => {
      dbModel 
    })
 
  },  
  create: function(req, res) {
    const {questionOne, questionTwo, questionThree, houseName} = req.body
    let newScore = {questionOne, questionTwo, questionThree, houseName}
    console.log(newScore)
    dbq.Quiz
      .create(newScore)
      .then(dbModel => res.json(dbModel))
      .catch(err => {res.status(422).json(err)});
  },
  update: function(req, res) {
    dbq.Quiz
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    dbq.Quiz
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};