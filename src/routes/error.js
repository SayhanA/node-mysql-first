const { get404 } = require("../controllers/error");

const route = require("express").Router();

route.use(get404);

module.exports = route;
