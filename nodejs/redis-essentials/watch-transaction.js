const { watch } = require('fs');
var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}
connectRedis();

async function watch(key) {
  const wResult = await client.watch(key);
  console.log('[zPop] watch:', wResult);
}

async function zPop(key, callback) {

  const rgResult = await client.zRange(key, 0, 0);
  console.log('[zPop] range:', rgResult);

  let multi = client.multi();
  const reResult = multi.zRem(key, rgResult);
  // console.log('[zPop] remove:', reResult);

  // make watch error!
  // const dResult = await client.del(key);
  let exResult = await multi.exec();
  if (exResult) {
    callback(rgResult);
  } else {
    zPop(key, callback);
  }
}

async function main() {
  await client.zAdd('presidents', {score: 1732, value: 'George'});
  await client.zAdd('presidents', {score: 1809, value: 'Abraham'});
  await client.zAdd('presidents', {score: 1858, value: 'Theodore'});

  await watch('presidents');
  await watch('presidents');
  await watch('presidents');

  await zPop('presidents', function(member) {
    console.log('The first president in the group is:', member);
  });

  await zPop('presidents', function(member) {
    console.log('The first president in the group is:', member);
  });

  await zPop('presidents', function(member) {
    console.log('The first president in the group is:', member);
  });
}

main();