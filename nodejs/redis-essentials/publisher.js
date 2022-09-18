var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}

async function main() {
  await connectRedis();

  var channel = process.argv[2];
  var command = process.argv[3];

  await client.publish(channel, command);
}

main();