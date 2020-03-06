const router = require("express").Router();
const bookRoutes = require("./users");

// Book routes
router.use("/users", bookRoutes);

module.exports = router;