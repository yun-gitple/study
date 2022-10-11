import redis from 'redis';

async function connectRedis() {
  const client = redis.createClient();

  // client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');

  console.log('~~~ Hello Redis Essential!');
}

const result = await connectRedis();