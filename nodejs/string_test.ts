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

console.log(_.toUpper(data1));
console.log(_.toUpper(data2));
console.log(_.toUpper(data3));
