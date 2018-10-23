var express = require('express')
var app = express();
var routes = require('./routes');
var port = 8888;
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());    
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 
app.use('/dashboard',routes);
app.listen(port,() => console.log('App is listening on port: ',port));