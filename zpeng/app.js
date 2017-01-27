const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const port = 3000;


const index = require('./controllers/index.js');

app.use('/', index);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

http.createServer(app)
.listen(port, ()=> {
  console.log('App listening on port ' + port + ' !');
})

module.exports = app;
