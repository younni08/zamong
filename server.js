// default
const express = require("express");
const bodyParser = require("body-parser");
// const fs = require("fs");

const app = express();
const port = process.env.port || 6000;

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

// const path = require("path");
// app.use(express.static(__dirname+"./../html"));

// Import Routes
const authRoute = require("./api/auth");

app.use("/api/user", authRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));