const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"
router.route("/")
  // .get(userController.findAll)
  .get(quizController.findAll)
  .post(quizController.create);
  
router.route("/gryff")
  .get(quizController.findGryff);

router.route("/slyth")
  .get(quizController.findSlyth);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(quizController.findById)
  .put(quizController.update)
  .delete(quizController.remove);

module.exports = router;