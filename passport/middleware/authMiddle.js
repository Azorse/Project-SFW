const auth = {

  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401)
    }
  }
}

module.exports =  auth;