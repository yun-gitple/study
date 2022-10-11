var redis = require('redis');
var client = redis.createClient();

async function connectRedis() {
  client.connect();
  console.log('redis connected!');
}
connectRedis();

exports.client = client;