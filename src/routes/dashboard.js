const route = require("express").Router();

route.get("/", (req, res, next) => {
  res.render('dashboard', {pageTitle: "Dashboard", user: req.session.user, link: "/dashboard"});
});

module.exports = route;
