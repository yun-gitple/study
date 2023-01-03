import moment  from "moment/moment";
import {differenceInCalendarDays} from "date-fns";
import _ from 'lodash';

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

// testWrongDate();
function testWrongDate() {
  calDate(undefined);
  calDate(null);
  calDate('');
}

function calDate(date: any) {
  console.log('date:', new Date(date));
}

// testMoment();
function testMoment() {
  const ADD_KST_HOURS = 9;

  const lastYear = moment().subtract(12, 'months').startOf('month')
        .set({
          hour: 0,
          minute: 0,
          second: 0
        }).format();
  console.log('lastYear:', lastYear);

  const lastMonth = moment().subtract(1, 'months').startOf('month')
        .set({
          hour: ADD_KST_HOURS,
          minute: 0,
          second: 0
        }).format();
  console.log('lastMonth:', lastMonth);

  const lastWeek = moment().subtract(1, 'weeks').startOf('week')
    .set({
      hour: 9,
      minute: 0,
      second: 0
    }).format();
  console.log('lastWeek:', lastWeek);
}

// testDateString();
function testDateString() {
  const date = new Date('2022-07-01');
  console.log('1:', date);
  console.log('2:', date.getDate());
  console.log('3:', date.toDateString());
  console.log('4:', date.toString());
  console.log('5:', date.toTimeString());
}

// dateAndDuration();
function dateAndDuration() {
  const dateStr1 = '20221030134340';
  const length = Number(dateStr1).toString().length;
  console.log('len:', length);

  const date1 = new Date(dateStr1.replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, '$1-$2-$3 $4:$5:$6'));
  console.log('date1:', date1);

  const dateDur1 = date1.getTime() / 1000;
  const loNow = _.now() / 1000;
  const sec1Day = 86400;
  
  console.log('dateDur1:', dateDur1, ', loNow:', loNow);
  console.log('loNow - dateDur1:', (loNow - dateDur1) / sec1Day);
}

getUntilMinutes();
function getUntilMinutes() {
  const date = new Date('2022-01-06T08:36:47.092Z'); //KST로 인식
  // const date = new Date();
  console.log('data:', date);
  console.log('data:', date.toDateString());
  console.log('data:', date.toTimeString());
  console.log('data:', date.toLocaleDateString());
  console.log('data:', date.toLocaleTimeString());
  console.log('data:', date.toUTCString());

  console.log('getFullYear:', date.getFullYear());
  console.log('getMonth:', date.getMonth());
  console.log('getDate:', date.getDate());
  console.log('getDay:', date.getDay());
  console.log('getHours:', date.getHours());
  console.log('getMinutes:', date.getMinutes());
  console.log('getTime:', date.getTime());
}

// testMinuteSeparation();
function testMinuteSeparation() {
  const minRange = 30;
  for (let i = 0 ; i < 60 ; i++) {  
    console.log('i:', i, ', ', Math.floor(i / minRange) * minRange);
  }
}
