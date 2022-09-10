var redis = require('redis');

function Queue(name, client) {
  this.name = name;
  this.client = client;
  this.key = 'queues:' + name;
  this.timeout = 0;
}

Queue.prototype.size = async function() {
  return await this.client.lLen(this.key);
}

Queue.prototype.push = async function(data) {
  return await this.client.lPush(this.key, data);
}

Queue.prototype.pop = async function() {
  const value = await this.client.brPop(this.key, this.timeout);
  console.log('[pop] key: ', this.key, ', value: ', value);
  
  return value;
}

exports.Queue = Queue;