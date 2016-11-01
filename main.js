/**
 * Set express application variables
 */
var express = require('express');
var app = express();

/**
 * Load configuration
 */
var config = require('./config');

/**
 * Set view engine
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/**
 * Set public directory
 */
app.use(express.static(__dirname + '/../client'));

/**
 * Set handlers for pages
 */
app.get('/', function(request, response) {
  response.render('index',{title:'Indie Warehouse'});
});

app.get('/about', function(request, response) {
  response.render('about',{title:'About'});
});

app.get('/graphics', function(request, response) {
  response.render('graphics',{title:'Graphics'});
});

app.get('/audio', function(request, response) {
  response.render('audio',{title:'Audio'});
});

app.get('/systems', function(request, response) {
  response.render('systems',{title:'Systems'});
});

/**
 * Set handler for '/helloworld' page
 */
app.get('/helloworld', function(request, response) {
  response.send('Hello World!');
});

/**
 * Make app listen to port
 */
app.listen(config.port, config.site, function() {
  var address = config.site+':'+config.port;
  console.log("App is running @:", address);
});
