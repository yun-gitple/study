var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}
connectRedis();

async function transfer(from, to, value, callback) {
  const balance = await client.get(from);
  console.log('[transfer] balance %d of %s', balance, from);
  let multi = client.multi();
  multi.decrBy(from, value);
  multi.incrBy(to, value);
  if (balance >= value) {
    const result = await multi.exec();
    callback(null, result);
  } else {
    multi.discard();
    callback(new Error('Insufficient funds'), null);
  }
}

async function main() {
  await client.mSet(['max:checkings', '100', 'hugo:checkings', '100']);
  console.log('max checkings: 100');
  console.log('hugo checkings: 100');
  const result = await transfer('max:checkings', 'hugo:checkings', 40, function(err, balance) {
    if (err) {
      console.log(err);
    } else {
      console.log('Transferred 40 from Max to Hugo');
      console.log('Max balance:', balance);
    }
  });
}

main();