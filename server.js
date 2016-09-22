var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect("mongodb://localhost/choices_game")

app.use(express.static(__dirname+'/public'));
app.use("/new_question", express.static(__dirname+"/public/new_question.html"));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
require('./app/routes.js')(app);

app.listen(8080);
console.log("App listening on port 8080");
