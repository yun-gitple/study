import _ from 'lodash';

// a();
function a() {
  const name = 'refereshData:1';
  try { 
    throw new Error(`RedisLockService: locking ${name} timed out`);
  } catch (err: any) {
    // console.log(err);
    console.log('name: ', err.name, ', msg: ', err.message, ', includes: ', err.message.includes('RedisLockService'), err.message.includes('timed out'));
  }
}

function throwError() {
  console.log('call throw error');
  throw new Error('tes throwError!');
}

// callstack();
function callstack() {
  try {
    throwError();
  } catch (err: any) {
    const thisError = new Error('my error');
    console.log(thisError.stack + err.stack);
  }
}

function secondFunc() {
  console.log('error:', new Error('secondFunc()'));
}

// firstFunc();
function firstFunc() {
  secondFunc();
}

testErrNMessage();
function testErrNMessage() {
  try {
    throw new Error('사용자 정보가 존재하지 않습니다.');
  } catch (err: any) {
    console.log('err:', err);
    console.log('err message', _.get(err, '사용자 정보가 존재하지 않습니다'));
  }
}