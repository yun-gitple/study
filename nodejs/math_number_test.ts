import _ from 'lodash';

// a();
function a() {
  console.log('~~~ ', Math.pow(52, 7)); //6: 20억, 7:1조
}

function validNumber(data: any): number {
  const nData = Number(data);
  if (_.isNumber(nData) && !_.isNaN(nData)) {
    return nData;
  } 

  return 0;
}

// b();
function b() {
  const data1 = null;
  const data2 = '';
  const data3 = undefined;
  const data4 = 1;
  const data5 = NaN;
  const data6 = '6';
  const data7 = 'jkj';

  // console.log(_.isNumber(data1));
  // console.log(_.isNumber(data2));
  // console.log(_.isNumber(data3));
  // console.log(_.isNumber(data4));
  // console.log(_.isNumber(data5));
  // console.log('divide:', data4/data5);
  // console.log('multiply:', data4*data5);
  // console.log('sum:', data4+data5);
  // console.log('sum:', data4+data5);
  // console.log('null:', new Number(null));
  // console.log('6:', _.isNumber(Number(data6)));

  console.log('1:', validNumber(data1));
  console.log('2:', validNumber(data2));
  console.log('3:', validNumber(data3));
  console.log('4:', validNumber(data4));
  console.log('5:', validNumber(data5));
  console.log('6:', validNumber(data6));
  console.log('7:', validNumber(data7));
}

// floatTest();
function floatTest() {
  const data1:number = 20.34;

  console.log('data:', data1);
}

testBig();
function testBig() {
  try {
    testIsBigInt(undefined);
  } catch (err) {
    console.log(`undefined:${err}`);
  }

  try {
    testIsBigInt(null);
  } catch (err) {
    console.log(`undefined:${err}`);
  }
  
  try {
    testIsBigInt('');
  } catch (err) {
    console.log(`undefined:${err}`);
  }
}

function testIsBigInt(bigData: any) {
  // const data: bigint = 123n;
  // console.log(_.isNull(data));

  const bigData2 = BigInt(bigData);
  console.log('big:', bigData2);
}

// testIsNumber(undefined);
// testIsNumber(null);
// testIsNumber('');
function testIsNumber(bigData: any) {
  const numData = Number(bigData);
  console.log('num:', numData);
}