const express = require("express");
const app = express();
const { notFoundHandler, errorHandler } = require("./error");

app.use(require("./middleware"));
app.use(require("./routers"));

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;
