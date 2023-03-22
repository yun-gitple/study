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

// c();
function c() {
  const data = 'this is city life!';
  console.log(data.includes('is'));
  console.log(data.includes('ci'));
}

// encodingTest();
function encodingTest() {
  const encodedStr = Buffer.from('í<95>´ë<8b>¹ ê³<84>ì¢<8c>ë<8a><94> ì <95>ì<83><81> ê³<84>ì¢<8c>ê°<80> ì<95><84>ë<8b><98>').toString('latin1');
  console.log('encoded:', encodedStr);
}

// testNullStringify();
function testNullStringify() {
  console.log(JSON.stringify(null));
  console.log(JSON.stringify(undefined));
}

// testStartWith();
function testStartWith() {
  const apiCode1 = 'AU01';
  const apiCode2 = 'IV01';
  const apiCode3 = '_AU02';
  console.log('r1:', apiCode1.startsWith('AU'));
  console.log('r2:', apiCode2.startsWith('AU'));
  console.log('r3:', apiCode3.startsWith('AU'));
}

// testSubstring();
function testSubstring() {
  const data = 'kr1234';
  console.log('sub:', data.substring(0, 2));
}

sizeToken();
function sizeToken() {
  const refreshToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJBaldQRllxYmxlcjNNY09qdi8vbTBnY1BIMzBWNGNmZTFVYkZVWFdaWmtTYWNTWk1rQ3pXb0xCMXRFaXVLQU51YmZ6ZWp3ZEJNazROZmZQZ2pLdzJrUT09Iiwic2NvcGUiOlsiYmFuay5saXN0Il0sImF0aSI6Ijk4NGQ1YTg3LTNjZTctNDZiNC04MTc1LTE0YTU1NjRmYjAxYyIsImlzcyI6IkExQUFFTTAwMDAiLCJleHAiOjE2Nzg5NDY5NjMsImp0aSI6ImUxNmY0MjZjLWExMjUtNGZiYy05MWIxLTg0MDdjYzMwMjMzZiIsImNsaWVudF9pZCI6IlM3Z3JCRjhwQ0FWMFYwMVRCRGdkVFJlaFJtV1V5RXNjIn0.KSo_sYcIr3AkABaOBEzoU332UD8GwHEXn6mLxCkDG76ABZwS98G4hsEq8kofnIDNuYavSeuREmUz1IjdSH2xHPcbRR_a23Z6uwYa6tG06nWjaQC4rCpFEyzsBQEA6Cp9pwO7pfXlLGpMA-t5RSYBqDnDo3VMLMKKOC8ozmmol8NsjbI6TMccQsrEWyFi3r5N60tczeNdcXJ1E5mgqhtGIIclN99NSQj4Dj0TJ5UXAhPRQ1UqvyO2C3ydWm4aHo4cSIqBy36XZz9JuAaSZIGBWiHl1qEU7yqWYI7V73sNMW00PQlT0Cns3fL6XOhnkG00EmxUnMM-OidpdRMNsJtzFQ';
  console.log('size1:', _.size(refreshToken));

  const encryptedToke = 'v1.aesgcm256.6e87f088.OluM_E0_5rmf3LYP.ZmSkgVkxcehZAIXdM1uOcMz8fRBiwXgn58DmVZIEqfwd6BVAZJb1YxoxGMsKbTg-yNueA7wx0AV_s-tvL4bWhCCEVSLE_smxRfxsXHq0Fhe46PG-PnNZU2MTw_e4JLDBSyhVtR0zsLAweI0ZAqlF72NrXBE3ahIjYsxXkVrou943YYRtBtO9V84HTfCJO48wnGJVUEuBVbL74sKy0EtiAGx6PGBsnc23CN8fuZrRk71vlTsKqTg2p0SzNbcWXtKucOdWqHPbNnc-uTlCpNJzNpGsk5k7l9rN1SNAEbaqZlkLiPA-Frkj5nLn1tG766atVoPcXHBPG5pbYLNIpYlaQlZaT4ovHq7I8AQ5JhS4KMdIu6-dWs7PdUUhxyTxNmmqU7iFMopzC7JG6UaBrlXPY7LRcIDqDnzv14bjNyOpHIb9C-j9UqGCYVgAIWC8dxrIOr16EWURtbYfy59xdVROkdQ4rntWCCVbj4bMHkZiEWcpBU4gj_jBbaGymusTt2H5S6fcpFnuQRDnL4IqLDUq16Y0hHNBztXfTmhOX5x5kj-7X9BUS9r4bILe4yCyYIcCCEwDsIMEJM7Czwt3LPiY8AhaJdoeIYXJG6a2-iznM-0mqwcRBKO9TDOEsvvDU5t_Wm_oAUWnwCrFKfHUOqwwXU9QFTxMZafo-OY5MZNxWEUvHHb7lrAjv43OsdQoT-7r3s8-ezblF6d949AFNVj-JT8q3AXJmDgzNLGVDyw3IoQOhZ_NxP0cRikK-az7A5LzfwB5x3dX94HkoHA9vjKUT57x1102TrC5B0-Kq2MymcqCVtVhppcT_D6PU1REF6GfB3RaMTVTZpg8U5BYUnrtTmEcLBm0N-m9kL5DvFHYTePgsF7KeUs7ZLds7vqaRa3qqTPLl2hQaFeKSm9ss7YO9jo0luU9ih1F-UAod2xDuU0f4sezEkWdP2YuXs-qu_AA1DBtru8CRH8HeopWqIBL9Fubx_DAO4eZU9T9QynQnmgEG0Ktx5-CE-NN4PehHhD5jXH3_DSmNVYtghecapFLhlLOxlUHOT02WvddLTx5T-IkguD0jjwDcAjxj91e21zg6ZDsBw5nJJKZEsA9cqMJE_W_-RKp_hY91l2YWrs9Yzxk4B6gh8RpB7lG2ggfDkbcHSE8kmb9q2gxhfnZvYSMBAjyrQtx0ajlfi7mLFDWVrOebHrRkqopSO8BimmLYGJtenjLNeFSYjOSmPQBhi7i5jxJXlawKzjQxWxorhsBZPBiH-0IGkH47pD0pMKH3b1iS5xohHDPFFlrDFF5xdlyutiLujtm40VKIm25Q8XD_vZPdqJbXR3-zh3IOkYS2Imj5-CTobYmPgye9xNtg2GxFGic5wBR2UrRAJ0kJTGkhQBb4vuN_IHcyYP0Ga9H-5wCWJKjpx4eOxDeblNUQinDIBl3IySElBV_NLAKnouedSpGwTu0GU9_WlanOtMZf1A_B8yLJE-K_6ENGmFctW2sxJd-huWUfhGEMPa5bQjHzbfjNB-2rXcP';
  console.log('size2:', _.size(encryptedToke));
}