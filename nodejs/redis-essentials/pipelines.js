var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}

async function main() {
  await connectRedis();

  let result = client.set('key1', 'value1');
  console.log('key1:', result);
  console.log('key1:', await result);

  result = client.set('key2', 'value1');
  console.log('key2:', result);
  console.log('key2:', await result);

  result = client.set('key3', 'value1');
  console.log('key3:', result);
  console.log('key3:', await result);
}

main();
