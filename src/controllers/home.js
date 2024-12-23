const getHome = (req, res, next) => {
    console.log(req.session.user)
  res.render("home", { pageTitle:"Home", user: req.session.user });
};

module.exports = { getHome };
