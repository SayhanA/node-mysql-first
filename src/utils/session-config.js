const session = require("express-session");

session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
});

module.exports = session;
