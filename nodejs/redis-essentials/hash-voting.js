var redis = require('redis');
var client = redis.createClient();

async function connectRedis() {
  client.connect();
  console.log('redis connected!');
}
connectRedis();

async function saveLink(id, author, title, link) {
  // await client.hSet('link:' + id, 'title', title, 'link', link,  'score', 0 , 'author', author);
  await client.hSet('link:' + id, 'score', 0 );
  await client.hSet('link:' + id, 'author', author);
  await client.hSet('link:' + id, 'title', title);
  await client.hSet('link:' + id, 'link', link);
}

async function upVote(id) {
  return await client.hIncrBy('link:' + id, 'score', 1);
}

async function downVote(id) {
  return await client.hIncrBy('link:' + id, 'score', -1);
}

async function showDetails(id) {
  const all = await client.hGetAll('link:' + id);
  // console.log('all: ', all);
  console.log('all.author: ', all.author);
  console.log('all.title: ', all.title);
  console.log('all.link: ', all.link);
  console.log('all.score: ', all.score);

  // const getAuthor = await client.hGet('link:' + id, 'author');
  // console.log('get: ', getAuthor);
}

async function scanDetails(id) {
  const value = await client.hScan('link:' + id, 0);
  // console.log('all: ', all);
  console.log('value: ', value);

  // const getAuthor = await client.hGet('link:' + id, 'author');
  // console.log('get: ', getAuthor);
}

saveLink(123, 'jongha', 'Jongha Github page', 'https://github.com/yun-gitple');
upVote(123);
upVote(123);
downVote(123);

saveLink(456, 'dohyeon', 'dohyeon Github page', 'https://github.com/dohyeon-gitple');
upVote(456);
upVote(456);
upVote(456);

// showDetails(123);
// showDetails(456);

scanDetails(123);
scanDetails(123);

scanDetails(456);
scanDetails(456);
