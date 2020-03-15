const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport")
const authMiddle = require('../../passport/middleware/authMiddle')

// Login
router.post("/login", 
  passport.authenticate("local", {
    failureRedirect: "/",
    failureFlash : true
  }), function (req, res, next) {
  console.log("sign in successful")
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.route("/register")
  .post(userController.create)
  
router.route('/logout')
  .get(userController.logOut)

router.get("/home", authMiddle.isLoggedIn, function(req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;