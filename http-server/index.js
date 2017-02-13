/**
 * Created by shellj on 2017/2/9.
 */

var server = require('./server');
var router = require('./router');

server.start(router.route);