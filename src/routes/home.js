const { getHome } = require("../controllers/home");

const route = require("express").Router();

route.get("/", getHome);

module.exports = route;
