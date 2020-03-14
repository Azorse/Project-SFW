const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/users"
router.route("/")
  // .get(userController.findAll)
  .post(quizController.create);
  


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(quizController.findById)
  .put(quizController.update)
  .delete(quizController.remove);

module.exports = router;