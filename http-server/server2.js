/**
 * Created by shellj on 2017/2/9.
 */

var http = require('http');
var url = require('url');
var fs = require('fs');

function onRequest(req, resp) {
  var pathname = url.parse(req.url).pathname;
  console.log('收到请求:' + pathname);

  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      resp.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      resp.writeHead(200, {'Content-Type': 'text/html'});
      resp.write(data.toString());
    }
    resp.end();
  })
}

http.createServer(onRequest).listen(8888);