var express = require("express");
var knex = require("knex");
var app = express();

var connection = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "demodata",
  },
});

module.exports = connection;
