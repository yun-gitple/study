var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}
connectRedis();

async function markDealAsSent(dealId, userId) {
  await client.sAdd(dealId, userId)
  console.log('deal', dealId, 'was just sent to user', userId);
}

async function sendDealIfNotSent(dealId, userId) {
  const isSent = await client.sIsMember(dealId, userId);
  if (isSent) {
    console.log('deal', dealId, 'was already sent to user', userId);
  } else {
    console.log('sending', dealId, 'to user', userId);
    //make codes to send to the user
    markDealAsSent(dealId, userId);
  }
}

async function showUsersAllDeals(dealIds) {
  const users = await client.sInter(dealIds);
  console.log(users, ' received all the deals: ' + dealIds);
}

async function showUsersAtLeastDeals(dealIds) {
  const users = await client.sUnion(dealIds);
  console.log(users, ' received at least one of the deals: ' + dealIds);
}

markDealAsSent('deal:1', 'user:1');
markDealAsSent('deal:1', 'user:1');
markDealAsSent('deal:1', 'user:2');
markDealAsSent('deal:2', 'user:1');
markDealAsSent('deal:2', 'user:3');
markDealAsSent('deal:2', 'user:3');

sendDealIfNotSent('deal:1', 'user:1');
sendDealIfNotSent('deal:1', 'user:2');
sendDealIfNotSent('deal:1', 'user:3');

sendDealIfNotSent('deal:2', 'user:1');
sendDealIfNotSent('deal:2', 'user:2');
sendDealIfNotSent('deal:2', 'user:3');

showUsersAllDeals(['deal:1', 'deal:2']);
showUsersAtLeastDeals(['deal:1', 'deal:2']);