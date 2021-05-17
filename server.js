// importing
const express = require("express");
const { sequelize } = require("./models");
const dotenv = require("dotenv");
const CORS = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

// app config
const app = express();
const port = process.env.PORT || 9001;

// middleware
app.use(express.json());
app.use(CORS());
app.use(bodyParser.json());

// db config

// API routes
require("./routes")(app);

// listening
app.listen(port, async () => {
  console.log(`listening on localhost: ${port}`);
  //   await sequelize.authenticate();
  console.log("Database connected!!!");
});

module.exports = app;
