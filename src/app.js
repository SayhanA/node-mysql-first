const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const db = require("./utils/database");
const PORT = process.env.PORT || 8000;

const authRoute = require("./routes/auth");
const errorRoute = require("./routes/error");

const app = express();

db.execute("SELECT * FROM `node-complete`.users");

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", authRoute);
app.use(errorRoute);

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}/`));
