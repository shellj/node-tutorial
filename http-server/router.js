/**
 * Created by shellj on 2017/2/9.
 */

function route(pathname) {
  console.log('About to route a request  for ' + pathname);
  console.log(__filename);
}

exports.route = route;