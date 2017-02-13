/**
 * Created by shellj on 2017/2/9.
 */

var http = require('http');

var options = {
  host: 'localhost',
  port: 8888,
  path: '/hello.html'
};

var callback = function (resp) {
  var body = '';
  resp.on('data', function (data) {
    body += data;
  });
  resp.on('end', function () {
    console.log(body);
  });
};

var req = http.request(options, callback);
req.end();
