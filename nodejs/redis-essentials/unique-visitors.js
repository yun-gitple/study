var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}
connectRedis();

async function addVisit(date, user) {
  let key = 'visits:' + date;
  await client.pfAdd(key, user);
}

async function count(dates) {
  let keys = [];
  console.log('count 1');
  dates.forEach(element => {
    console.log('count 2');
    keys.push('visits:' + element);
  });
  console.log('count 3');

  const result = await client.pfCount(keys);
  console.log('[count] Dates', dates.join(', '), 'had', result, 'visits');
}

async function aggrDate(date) {
  const des = 'visits:' + date;
  let keys = [];
  for (let i = 0 ; i < 24 ; i++) {
    keys.push('visits:' + date + 'T' + i);
  }

  const result = await client.pfMerge(des, keys);
  console.log('aggr result: ', result);
}

async function main() {
  const MAX_USERS = 200;
  const TOTAL_VISITS = 1000;

  for (let i = 0 ; i < TOTAL_VISITS ; i++) {
    let userName = 'user_' + Math.floor(1 + Math.random() * MAX_USERS);
    let hour = Math.floor(Math.random() * 24);
    await addVisit('2015-01-01T' + hour, userName);
  }

  await count(['2015-01-01T0']);
  await count(['2015-01-01T0', '2015-01-01T6', '2015-01-01T7', '2015-01-01T21']);

  await aggrDate('2015-01-01');
  await count(['2015-01-01']);
}

main();