const {
  getLogin,
  getRegistration,
  postRegistration,
  postLogin,
  postLogout,
} = require("../controllers/auth");

const route = require("express").Router();

route.get("/registration", getRegistration);

route.post("/registration", postRegistration);

route.get("/login", getLogin);

route.post("/login", postLogin);

route.post("/logout", postLogout);

module.exports = route;
