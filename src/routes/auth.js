const { getLogin, getRegistration, postRegistration } = require("../controllers/users");

const route = require("express").Router();

route.get("/login", getLogin);

route.get("/registration", getRegistration);

route.post("/registration", postRegistration);

module.exports = route;
