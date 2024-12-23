const User = require("../models/user");

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
        res.render("registration", {
          props: { ...req.body },
          error: err.sqlMessage,
          pageTitle: "Registration",
        });
      });
  } else {
    res.render("registration", {
      props: { ...req.body },
      error: "Your password and confirm password are not same.",
      pageTitle: "Registration",
    });
  }
};

const getLogin = (req, res, next) => {
  res.render("login", {
    props: null,
    error: null,
    pageTitle: "Login",
  });
};

const postLogin = (req, res, next) => {
  User.getUserByEmail(req.body.email)
    .then(([data, fieldData]) => {
      if (data.length > 0) {
        if (data[0].password === req.body.password) {

          req.session.user = {
            id:data[0].id,
            email: data[0].email,
            name: data[0].name
          }
          
          res.redirect("/");
        } else {
          res.render("login", {
            props: { email: req.body.email, password:"" },
            error:
              "Your password is not valid. Try again.",
            pageTitle: "Login",
          });
        }
      } else {
        res.render("login", {
          props: { ...req.body },
          error:
            "Your email is not registered yet. Please register first to login.",
          pageTitle: "Login",
        });
      }
    })
    .catch((err) => console.log(err));
};

module.exports = { getLogin, getRegistration, postRegistration, postLogin };
