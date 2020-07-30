const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3100;

const app = express();

const adminRoutes = require("./routes/gateway");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", adminRoutes);

app.listen(PORT, () => {
  console.log("Service  gateway is running " + PORT);
});
