var express = require('express');
var app = express();
// let base_route = require('./routes/api_route');
var body_parser = require('body-parser');

// Configure bodyparser to handle post requests
app.use(body_parser.urlencoded({
    extended: true
 }));

 app.use(body_parser.json());
app.use('/api',base_route);
app.listen(5001,function(){
    console.log("node server started on port:5001");
});