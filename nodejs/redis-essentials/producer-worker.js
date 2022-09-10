var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  // console.log('producer client: ', client);
}
connectRedis();

var queue = require('./queue');
var logsQueue = new queue.Queue('logs', client);
var MAX = 5;

for (var i = 0 ; i < MAX ; i++) {
  logsQueue.push('hellow redis #' + i);
}

console.log('created ' + MAX + ' logs');