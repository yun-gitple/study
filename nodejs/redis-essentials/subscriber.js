var redis = require('redis');
var client = redis.createClient();
async function connectRedis() {
  await client.connect();
  console.log('redis connected! ');
}
connectRedis();

var os = require('os');

var COMMANDS = {};

COMMANDS.DATE = function() {
  let now = new Date();
  console.log('DATE', now.toISOString());
}

COMMANDS.PING = function() {
  console.log('PONG');
}

COMMANDS.HOSTNAME = function() {
  console.log('HOSTNAME', os.hostname());
}

async function main(channel) {
  await client.subscribe(channel, (cmdName) => {
    console.log('channel-1:', cmdName);
    if (COMMANDS.hasOwnProperty(cmdName)) {
      let cmdFunc = COMMANDS[cmdName];
      cmdFunc();
    } else {
      console.log('unknown cmd:', cmdName);
    }
  });
}

var channel = process.argv[2];
main(channel);