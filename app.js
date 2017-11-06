"use strict";

var express = require('express');
var app = express();
var path = require('path');

var exphbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render('index')
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express started. Listening on port %s', port);