import _ from 'lodash';

a();
function a() {
  const name = 'refereshData:1';
  try { 
    throw new Error(`RedisLockService: locking ${name} timed out`);
  } catch (err: any) {
    // console.log(err);
    console.log('name: ', err.name, ', msg: ', err.message, ', includes: ', err.message.includes('RedisLockService'), err.message.includes('timed out'));
  }
}