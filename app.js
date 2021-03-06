"use strict";

var express = require('express');
var app = express();
var path = require('path');
const https = require('https');
const http = require('http');


setInterval(function() {
    http.request('http://afternoon-temple-49384.herokuapp.com/', console.log("here")).end();
    console.log('set interval aAAAAAA')
    console.log('server poked');
}, 300000); // every 5 minutes (300000)


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

app.get('/contact', function(req, res) {
	res.render('contact')
})

app.get('/update', function(req, res) {
	res.render('update')
})

app.get('/demo', function(req, res) {
	res.render('demo')
})


var port = process.env.PORT || 8080;
app.listen(port);
console.log('Express started. Listening on port %s', port);
