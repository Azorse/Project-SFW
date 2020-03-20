const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport")
const authMiddle = require('../../passport/middleware/authMiddle')


function loginResponse(req, res, next) {
  console.log("sign in successful")
  res.json({
    user: req.user,
    loggedIn: true
  });
}

// Login
// router.post("/login", 
//   passport.authenticate("local", {
//     failureRedirect: "/api/users/loginFailed",
//     failureFlash : true
//   }), function (req, res, next) {
//   console.log("sign in successful")
//   res.json({
//     user: req.user,
//     loggedIn: true
//   });
// });
router.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log(`info:${info.message} user: ${user}`)
      return res.json({message: info.message}); 
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user)
    });
  })(req, res, next);
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