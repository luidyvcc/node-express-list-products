const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// start app
const app = express();

// allows sending data in json format
app.use(express.json);

// frees access to specific domains
app.use(cors());

// Start DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true });

// Require all models on directory "models"
requireDir("./src/models");

// Routes
app.use("/api", require("./src/routes"));

app.listen(3001);