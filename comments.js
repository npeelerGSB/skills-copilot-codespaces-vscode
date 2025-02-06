// create web server
// 1. npm install express
// 2. npm install body-parser
// 3. npm install nodemon
// 4. npm install cors

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));