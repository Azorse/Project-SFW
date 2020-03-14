const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport")


// Login
router.post('/login', (req, res, next) => {
  console.log(req.body)
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next);
});

router.route("/register")
  .post(userController.create)
  
router.route('/logout')
  .get(userController.logOut)




// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;