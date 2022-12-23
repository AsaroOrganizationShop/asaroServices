var express = require('express');
var uuid = require('uuid');
var body_parser = require('body-parser');
var conex = require('./con.js');
var encrypt = require('./auth/encrypt.js');
var app = express();

conex.conectar();

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}))

app.listen(process.env.PORT || 3000);
console.log("server on port", process.env.PORT || 3000);
