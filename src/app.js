const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const db = require("./utils/database");
const PORT = process.env.PORT || 8000;

const authRoute = require("./routes/auth");
const errorRoute = require("./routes/error");
const session = require("express-session");
const homeRoute = require("./routes/home");

const app = express();

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60 * 60 * 1000 },
  })
);

db.execute("SELECT * FROM `node-complete`.users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use("/", authRoute);
app.use(homeRoute);
app.use(errorRoute);

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}/`));
