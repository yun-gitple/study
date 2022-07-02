var date0 = new Date('2022/07/01');       //KST로 인식
var date1 = new Date('2022/07/01T00:30'); //KST로 인식
var date1 = new Date('2022/07/01 00:30'); //KST로 인식
var date2 = new Date('2022-07-01');       //UTC로 인식
var date3 = new Date('2022-07-01T00:30'); //KST로 인식
var date3 = new Date('2022-07-01 00:30'); //KST로 인식

console.log('date0: ', date0, ", zone: ", new Date(date0.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
console.log('date1: ', date1, ", zone: ", new Date(date1.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
console.log('date2: ', date2, ", zone: ", new Date(date2.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
console.log('date3: ', date3, ", zone: ", new Date(date3.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));