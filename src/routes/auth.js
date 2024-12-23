const {
  getLogin,
  getRegistration,
  postRegistration,
  postLogin,
} = require("../controllers/auth");

const route = require("express").Router();

route.get("/registration", getRegistration);

route.post("/registration", postRegistration);

route.get("/login", getLogin);

route.post("/login", postLogin);

module.exports = route;
