import moment  from "moment/moment";
import {differenceInCalendarDays} from "date-fns";
import { createDeflate } from "zlib";

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

// d();
function d() {
  const startD = new Date('2011-05-31');

  console.log(startD);
  console.log(startD.getFullYear());

  // console.log(moment('20110531')('Asia/Seoul').toDate());
  // console.log(moment().tz('Asia/Seoul').toDate());
}

// startMonth();
function startMonth() {
  const result = moment()
    .startOf('month')
    .set({
      hour: 0,
      minute: 0,
      second: 0
    }).format();

    console.log('this montho:', result);
}

// jwtMilli();
function jwtMilli() {
  const secData = '1690240903';
  const secDataNum = 1690240903; // 10
  const secDataNum2 = 16902409030; // 11
  const secDataNum3 = 169024090; // 9
  const secDataNum9Max = 999999999; // 9 max
  const secDataNum11Min = 10000000000; // 11 min
  const secDataNumOdd10Norm = '001690240903'; // odd 10 norm

  const milliDate = new Date(1664459127832);

  console.log('nor dat:', new Date(secDataNum * 1000));
  console.log('far dat:', new Date(secDataNum2 * 1000));
  console.log('les dat:', new Date(secDataNum3 * 1000));
  console.log('secDataNum9Max:', new Date(secDataNum9Max * 1000));
  console.log('secDataNum11Min:', new Date(Number(secDataNum11Min) * 1000));

  console.log('nor dat length:', secDataNum.toString().length);
  console.log('nor dat length:', secDataNum2.toString().length);
  console.log('nor dat length:', secDataNum3.toString().length);
  console.log('secDataNumOdd10Norm:', Number(secDataNumOdd10Norm).toString().length);
}

// testDiff();
function testDiff() {
  const curDate = new Date();
  const endDate = new Date('2023-07-28T00:00:00.000Z');
  let days = differenceInCalendarDays(curDate, endDate);
  console.log('diff:', days);
}

testWrongDate();
function testWrongDate() {
  calDate(undefined);
  calDate(null);
  calDate('');
}

function calDate(date: any) {
  console.log('date:', new Date(date));
}
