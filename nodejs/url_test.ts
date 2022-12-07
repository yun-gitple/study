import _ from 'lodash';
import test from 'node:test';

// a();
function a() {
  const testUrl = 'https://apiportal.ibk.co.kr:7443/ibk/mdo/v1/bank/irps';

  const path = new URL(testUrl).pathname.substring(1);
  console.log('path:', path);

  let tmpPath = path.match(/v1(.)*/i);
  console.log('match:', tmpPath);
  
}

function errorA() {
  const testUrl2 = '/ibk/mdo/v1/bank/irps';
  const path2 = new URL(testUrl2).pathname.substring(1);
  console.log('path2:', path2);
}

// invokeTest();
function invokeTest() {
  const testUrl = 'https://apiportal.ibk.co.kr:7443/ibk/mdo/v1/bank/irps';
  const testUrl2 = 'https://apiportal.ibk.co.kr:7443/ibk/mdo/v1/card/cards/abdc/approval-domestic';
  const path = new URL(testUrl2).pathname.substring(1);

  const result = _.invoke(path, 'match', /v1\/card\/cards\/(.)*\/approval-domestic/);
  console.log(result);
}

function testParse(data: any) {
  console.log(_.isObject(data));
  console.log('0:', data);

  let stringJ = JSON.stringify(data);
  console.log('1:', stringJ);

  stringJ = JSON.stringify(stringJ);
  console.log('2:', stringJ);

  stringJ = JSON.stringify(stringJ);
  console.log('3:', stringJ);

  stringJ = JSON.stringify(stringJ);
  console.log('4:', stringJ);

  stringJ = JSON.parse(stringJ);
  console.log('3:', stringJ);

  stringJ = JSON.parse(stringJ);
  console.log('2:', stringJ);

  stringJ = JSON.parse(stringJ);
  console.log('1:', stringJ);

  stringJ = JSON.parse(stringJ);
  console.log('0:', stringJ);

  stringJ = JSON.parse(stringJ);
  console.log('-1:', stringJ);
}

testObject();
function testObject() {
  const data = { a: 'b', age: 19 };
  testParse(data);
}
