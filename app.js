var express = require('express');
var request = require('request');
var pjson = require('./package.json');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/weltys', function(req, res) {
 request('http://www.weltysdeli.com/daily.html', function(error, response, body) {
  var status;
  var meatloaf_melty = /meat( )?loaf melty/i;
  var meatloaf = /meat( )?loaf/i;

  if (error || response.statusCode != 200) {
    status = 'ERROR';
  }
  else if (meatloaf_melty.test(body)) {
    status = 'YES';
  }
  else if (meatloaf.test(body)) {
    status = 'MAYBE';
  }
  else {
    status = 'NO';
  }

  res.send({ status:  status, version: pjson.version });
 }); 
});

app.listen(process.env.PORT || 8383);
