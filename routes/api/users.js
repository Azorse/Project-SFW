const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/users"
router.route("/")
  .post( async ()=> {
    //await userController.create()
    await userController.login()
    
  })
  


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;