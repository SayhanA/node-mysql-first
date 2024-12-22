const User = require("../models/user");

const getLogin = (req, res, next) => {
  res.render("login");
};

const getRegistration = (req, res, next) => {
  res.render("registration", {
    props: null,
    error: null,
    pageTitle: "Registration",
  });
};

const postRegistration = (req, res, next) => {
  if (req.body.password === req.body.confirm_password) {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
      created_at: "2024-12-21 15:30:00",
    });

    // Log the created user instance
    user
      .save()
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => {
        console.error(err.sqlMessage);
        res.render("registration", {
          props: {...req.body},
          error: err.sqlMessage,
          pageTitle: "Registration",
        });
      });
  } else {
    res.render("registration", {
      props: {...req.body},
      error: "Your password and confirm password are not same.",
      pageTitle: "Registration",
    });
  }
};

module.exports = { getLogin, getRegistration, postRegistration };
