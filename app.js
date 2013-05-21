var express = require('express');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
  response.send('hello world');
});

app.get('/weltys', function(req, res) {
 request('http://www.weltysdeli.com/daily.html', function(error, response, body) {
  var status;
  var meatloaf_melty = /meatloaf melty/i;
  var meatloaf = /meatloaf/i;

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

  res.send({ status:  status });
 }); 
});

app.listen(8383);
