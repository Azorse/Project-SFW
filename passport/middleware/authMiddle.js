const auth = {

  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('CREATE A ROUTE HERE')
    }
  }
}

module.exports =  auth;