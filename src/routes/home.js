const { getHome } = require("../controllers/home");

const route = require("express").Router();

route.get("/", getHome);

route.get("/menu", (req, res, next) => {
  res.render("menu", {
    pageTitle: "Menu",
    user: req.session.user,
    link: "/menu",
  });
});

route.get("/about", (req, res, next) => {
  res.render("about", {
    pageTitle: "About",
    user: req.session.user,
    link: "/about",
  });
});

route.get("/contact", (req, res, next) => {
  res.render("contact", {
    pageTitle: "Contact",
    user: req.session.user,
    link: "/contact",
  });
});

module.exports = route;
