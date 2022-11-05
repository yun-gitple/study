import _ from 'lodash';

function a() {
  const testUsers = [10, 539, 590];

  var data = 10;
  console.log(testUsers.includes(Number(data)));

  testUsers.forEach( item => {
    console.log('~~~ item: ', item);
    if (item === 539) {
      return;
    }
  });
}

//b();
function b() {
  const cleared = [
    "asset_connect",
    "app_recommend",
  ];

  console.log('includes: ', _.includes(cleared, 'asset_connect'));
}

c();
function c() {
  const data1 = { a: 'this', b: 'is', c: 'my', d: 'life' };
  const data0 = [1, 2, 3, 4];
  // console.log('data1:', ...data1);
  console.log('data0:', ...data0);

  const data2 = { ...data1 };
  const data3 = [ ...data0 ];

  console.log(data2);
  console.log(data3);
  console.log(data1 == data1);
  console.log(data1 === data1);
  console.log(data0 == data3);
  console.log(data0 === data3);
}
