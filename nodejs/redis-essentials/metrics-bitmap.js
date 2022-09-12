var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}

async function storeDailyVisit(date, userId) {
  let key = 'visits:daily:' + date;
  const result = await client.setBit(key, userId, 1);
  console.log('user ', userId, ' visited on ', date);
}

async function countVisits(date) {
  let key = 'visits:daily:' + date;
  console.log('[countVisits] key: ', key, ' on date ', date);
  const result = await client.bitCount(key);
  console.log(key, ' had ', result, ' visits.');
}

async function showVisitUser(date) {
  let key = 'visits:daily:' + date;
  const result = await client.get(key);

  let userIds = [];
  let data = new TextEncoder().encode(result);
  for(let dataI = 0 ; dataI < data.length; dataI++) {
    for(let bitI = 7 ; bitI >= 0 ; bitI--) {
      let visited = data[dataI] >> bitI & 1;
      if (visited === 1) {
        let userId = dataI * 8 + (7 - bitI);
        userIds.push(userId);
      }
    }
  };

  console.log('users ' + userIds + ' visited on ' + date);
}

async function main() {
  await connectRedis();

  await storeDailyVisit('2015-01-01', '1');
  await storeDailyVisit('2015-01-01', '2');
  await storeDailyVisit('2015-01-01', '10');
  await storeDailyVisit('2015-01-01', '55');
  await storeDailyVisit('2015-01-01', '100');
  await storeDailyVisit('2015-01-01', '155');

  await countVisits('2015-01-01');
  await showVisitUser('2015-01-01');
}

main();