import { createCipheriv } from 'crypto';
import  _ from 'lodash';

function isAllAlphabet(str: string) {
  if (_.size(str) === 0) {
    return false;
  }

  let isAll = true;
  for (let i = 0; i < _.size(str); i++) {
    isAll &&= /[a-zA-Z]/.test(str.charAt(i));
  }

  return isAll;
}

function testAlpha() {
  let data1 = null;
  const data2 = 'abEdef';
  const data3 = 'AbEdeF';
  const data4 = 'A3BCDE';
  const data5 = 'EFGHIJ';
  const data6 = 'EFGH ';

  // console.log(isAllAlphabet(data1));
  console.log(isAllAlphabet(data2));
  console.log(isAllAlphabet(data3));
  console.log(isAllAlphabet(data4));
  console.log(isAllAlphabet(data5));
  console.log(isAllAlphabet(data6));

  // console.log(_.toUpper(data1));
  console.log(_.toUpper(data2));
  console.log(_.toUpper(data3));
}

// const ci = 'jdjfie084i4';
// console.log('~~~ ', 'fundora:check-invest-advisor:' + ci);

// a();
function a() {
  const splitT = '18,19,  20';
  const splitted = splitT.split(/, */);
  splitted.forEach((data) => console.log('data:', data));
  // console.log('~~~ result: ', splitT.split(', '));

  console.log('~~~ isEmpty: ', _.isEmpty(undefined));
}

function encryptData(plainText: string, encoding?: BufferEncoding): string {
  const key = 'N%xM0!HrVQXLux$2uqP2@-YNZKj+^t+1';
  const iv = 'H1IV#I+9KY&hzT@i';
  const algo = 'aes-256-cbc';

  const cipher = createCipheriv(algo, Buffer.from(key), iv);
  const startData = cipher.update(plainText);
  const endData = Buffer.concat([startData, cipher.final()]).toString(encoding);

  return endData;
}

// b();
function b() {
  const data1 = encryptData('jongha', 'base64');
  console.log('1: ', data1);

  const reData1 = Buffer.from(data1, 'base64').toString();
  console.log('1: ', reData1);

  const data2 = encryptData('jongha');
  console.log('2: ', data2);

  const base64Str = Buffer.from(data2).toString('base64');
  console.log('2: ', base64Str);

  const reData2 = Buffer.from(base64Str, 'base64').toString();
  console.log('2: ', reData2);

  const base1 = Buffer.from('Zzvy/GpnwIpmBsix7LUHiA==', 'base64').toString();
  console.log('3: ', base1);

  const base2 = Buffer.from('Zzvvv73vv71qZ++/ve+/vWYGyLHvv70H77+9', 'base64').toString();
  console.log('3: ', base2);
  console.log('3: ', base1 === base2);

}

c();
function c() {
  const data = 'this is city life!';
  console.log(data.includes('is'));
  console.log(data.includes('ci'));
}