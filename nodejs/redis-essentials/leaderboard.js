var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}
connectRedis();

function LeaderBoard(key) {
  this.key = key;
}

LeaderBoard.prototype.addUser = function(userName, score) {
  const added = await client.zAdd([this.key, score, userName]);
  console.log('user ', userName, ' added to the leaderboard');
}

LeaderBoard.prototype.removeUser = function(userName) {
  const added = await client.zRem(this.key, userName);
  console.log('user ', userName, ' removed from the leaderboard');
}

LeaderBoard.prototype.getScoreRank = function(userName) {
  const userScore = await client.zScore(this.key, userName);
  const userRevRank = await client.zRevRank(this.key, userName);
  console.log('== Details of ', userName);
  console.log('Score: ', userScore, ', Rank: #', userRevRank + 1);
}

LeaderBoard.prototype.showTopUsers = function(quantity) {
  const topUsers = await client.zRangeWithScores([this.key, 0, quantity - 1]);
  console.log('\nTop ', quantity, ', users:');
  for( var i = topUsers.length , rank = topUsers.length / 2; i >= 0; i -= 2, rank--) {
    console.log('#' + rank, 'User: ' + reply[i] + ', score: ', reply[i + 1]);
  }
}
