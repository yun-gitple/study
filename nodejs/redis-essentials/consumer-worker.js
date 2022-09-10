var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  // console.log('consumer client: ', client);
}
connectRedis();

var queue = require('./queue');
var logsQueue = new queue.Queue('logs', client);

async function logMessage() {
  const replies = await logsQueue.pop();
  console.log('[consummer] got queue: ', replies.key, ', log:', replies.element);
}

logMessage();