import moment  from "moment/moment";

function date_a() {
  const date0 = new Date('2022/07/01');       //KST로 인식
  const date1 = new Date('2022/07/01T00:30'); //KST로 인식
  const date11 = new Date('2022/07/01 00:30'); //KST로 인식
  const date2 = new Date('2022-07-01');       //UTC로 인식
  const date3 = new Date('2022-07-01T00:30'); //KST로 인식
  const date33 = new Date('2022-07-01 00:30'); //KST로 인식

  console.log('date0: ', date0, ", zone: ", new Date(date0.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
  console.log('date1: ', date1, ", zone: ", new Date(date1.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
  console.log('date11: ', date11, ", zone: ", new Date(date11.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
  console.log('date2: ', date2, ", zone: ", new Date(date2.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
  console.log('date3: ', date3, ", zone: ", new Date(date3.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
  console.log('date33: ', date33, ", zone: ", new Date(date33.toLocaleString("en-US", {timeZone: "Asia/Seoul"})));
};

function date_b() {

  const date0 = new Date('2022/06/01');       //KST로 인식
  const date00 = new Date('20220601');       //KST로 인식
  const date1 = new Date('2022-06-29T06:54:27.000Z'); //KST로 인식

  console.log('date0: ', date0, ', getTime: ', date0.getTime());
  console.log('date00: ', date00, ', getTime: ', date00.getTime());
  console.log('date1: ', date1, ', getTime: ', date1.getTime());
}

// date_a();
// console.log('~~~~~~~~~~~~~');
// date_b();

// const firstT = Date.now();
// console.log('~~~~ time stamp: ', firstT, ', ', Date.now() - firstT);

// c();
function c() {
  const currentD = new Date();
  // console.log('this year: ', currentD.getFullYear());
  console.log('this year: ', new Date(new Date().getFullYear() + '-01-01'));
  // console.log('this year: ', new Date('2022-01-01'));
}

d();
function d() {
  const startD = new Date('2011-05-31');

  console.log(startD);
  console.log(startD.getFullYear());

  console.log(moment('20110531')('Asia/Seoul').toDate());
  console.log(moment().tz('Asia/Seoul').toDate());
}