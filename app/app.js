const express = require("express");
const app = express();
const { notFoundHandler, errorHandler } = require("./error");

const myDB = require("../db/db");

myDB.create("user 1", 10);
// myDB.create("user 2", 10);
// myDB.create("user 3", 10);
// myDB.create("user 4", 10);
// myDB.create("user 5", 10);
myDB.bulkCreate("user 6", 10, 2);
const tickets = myDB.find();
console.log("all tickets", tickets);
const hello = myDB.draw(2);

app.use(require("./middleware"));
app.use(require("./routers"));

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;
