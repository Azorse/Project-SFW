const router = require("express").Router();
const userRoutes = require("./users");
const quizRoutes = require("./quiz");

// Book routes
router.use("/users", userRoutes);
router.use("/quiz", quizRoutes);

module.exports = router;