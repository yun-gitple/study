var redis = require("redis"); // 1
var client = redis.createClient(); // 2

async function connect() {
  await client.connect();

  console.log('~~ this is working');

  await client.set('key', 'hello');
  const value = await client.get('key');

  console.log('~~ value: ', value);
}

connect();


// client.quit();