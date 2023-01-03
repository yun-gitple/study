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

// c();
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

function dotParam(...data: any) {
  [...data].forEach((element) => {
    console.log('el:', element, ', typeof:', typeof element === 'string');
  })
}

// d();
function d() {
  dotParam(1, 2, '3', {a:4, b:5});
}

function dotConcat(prefix: string, userId: bigint, ...details: any) {
  let cacheKey = `${prefix}:${userId}`;

  [...details].forEach((element) => {
    cacheKey += ':' + (typeof element === 'string' ? element : JSON.stringify(element));
    console.log('concat:', cacheKey, ', element:', element);
  });

  console.log('key:', cacheKey);
}

// keyTest();
function keyTest() {
  dotConcat('invest_cons', BigInt(24), { a: '1', b : 2}, 'jongha is !!!');
}

// uniqueTest();
function uniqueTest() {
  const orgs:any = [];
  const org = { code: '12e', name: 'this' };
  orgs.push(org);
  orgs.push(org);
  orgs.push(org);

  const result:any = [];
  const user = {ID: 1, CUST_ID: '1234'};

  result.push({user, orgs});
  result.push({user, orgs});

  const uniqueR = _.uniqBy(result, 'user');
  console.log('unique:', JSON.stringify(uniqueR));
}

// multiNestArrays();
function multiNestArrays() {
  const data = [
    { 
      accountId: 19,
      accounts: [
        {
          accountNo: 239,
          products: [
            {
              dome: '129',
              over: '349'
            },
            {
              dome: '569',
              over: '789'
            },
          ]
        },
        {
          accountNo: 249,
          products: [
            {
              dome: '909',
              over: '129'
            },
            {
              dome: '119',
              over: '229'
            },
          ]
        }
      ]
    },
    { 
      accountId: 18,
      accounts: [
        {
          accountNo: 238,
          products: [
            {
              dome: '128',
              over: '348'
            },
            {
              dome: '568',
              over: '788'
            },
          ]
        },
        {
          accountNo: 248,
          products: [
            {
              dome: '908',
              over: '128'
            },
            {
              dome: '118',
              over: '228'
            },
          ]
        }
      ]
    }
  ];

  const result = data.map((element) => {
    const data2 = element.accounts;
    return _.flatten(data2.map(((element2) => element2.products)));
  });

  console.log('result:', result);
  console.log('result_fatten:', _.flatten(result));
}

// testWrongIndex();
function testWrongIndex() {
  const data = [1, 2, 3];
  console.log('data:', data[5]);
}

testSameMerge();
function testSameMerge() {
  const data1 = { 'a': 1, 'b': 2};
  const data2 = { 'b': 2, 'c': 3};

  _.merge(data1, data2);

  console.log('data:', data1);
}
