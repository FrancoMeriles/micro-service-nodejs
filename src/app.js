const express = require("express");
const cors = require("cors");

const app = express();

//settings
app.set("port", 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/products", require("./routes/products"));
app.use("/api/search", require("./routes/search"));

module.exports = app;
