const getHome = (req, res, next) => {
  res.render("home", { pageTitle:"Home", user: req.session.user });
};

module.exports = { getHome };
