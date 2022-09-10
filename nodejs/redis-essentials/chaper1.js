var redis = require('redis');
var client = redis.createClient();

async function chaper1_test() {
  await client.connect();

}
chaper1_test();

async function upVote(id) {
  let key = 'article:' + id + ':votes';
  let value = await client.incr(key);

  // console.log('~~~ upVote incr: ', value);
  // console.log('~~~ upVote value: ', await client.get(key));
}

async function downVote(id) {
  let key = 'article:' + id + ':votes';
  let value = await client.decr(key);

  // console.log('~~~ downVote decr: ', value);
  // console.log('~~~ downVote value: ', await client.get(key));
}

async function showResults(id) {
  let headlineKey = 'article:' + id + ':headline';
  let voteKey = 'article:' + id + ':votes';

  console.log('show reslut, id: ', id);
  const replies = await client.mGet([headlineKey, voteKey]);
  console.log('The article "' + replies[0] + '" has ', replies[1], ' votes');
}

upVote(12345);
upVote(12345);
upVote(12345);
upVote(10001);
upVote(10001);
downVote(10001);
upVote(60056);

showResults(12345);
showResults(10001);
showResults(60056);
