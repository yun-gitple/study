const _  = require('lodash');

b();

function b() {
  // console.log(_.isEmpty(null)); //true
  // console.log(_.isNil(null));   //true
  // console.log('-------');

  console.log(_.isEmpty(true)); //true
  console.log(_.isNil(true));   //false
  console.log('-------');
  // => true
  console.log(_.isEmpty(1));    //true
  console.log(_.isNil(1));      //false
  console.log('-------');

  console.log(_.isEmpty(''));  //true
  console.log(_.isNil(''));    //false
  console.log('-------');

  console.log(_.isEmpty(''));  //true
  console.log(_.isNil(''));    //false
  console.log('-------');

  // => true
  // console.log(_.isEmpty([1, 2, 3])); //false
  // console.log(_.isNil([1, 2, 3]));   //false
  // console.log('-------');
  // => false
  // console.log(_.isEmpty({ 'a': 1 }));  //false
  // console.log(_.isNil({ 'a': 1 }));    //false
  // console.log('-------');
  // => false
  // => true
  // console.log(_.isEmpty(NaN)); //true
  // console.log(_.isNil(NaN));   //true
  // console.log('-------');
  // => true
  // console.log(_.isEmpty(undefined));  //true
  // console.log(_.isNil(undefined));    //true
  // => true
}

function a() {
  let data = [];

  console.log('size: ', _.size(data));
  console.log('size: ', data.length);

  const obj1 = {
    name : 'Kim',
    tel : ['010-1111-1111', '010-2222-2222'],
  };

  const obj2 = {
    name : 'Jongha',
    address : 'Suwon'
  };

  console.log('merged: ', _.merge(obj1, obj2));
  console.log('obj1: ', _.merge(obj1));
  console.log('obj2: ', _.merge(obj2));

  const specificIndustry = {
    MD_ORGS: {
      INDUSTRY: 'bank',
    },
  };
  const customQuery = {
    where: {
      BDAY_CUST_ID: 1,
      IS_ACTIVE: true,
    },
    include: {
      MD_ORGS: {
        select: {
          INDUSTRY: true,
          ORG_NAME: true,
          ORG_ALT_NAME: true,
          ORG_CODE: true,
        },
      },
    },
  };

console.log('where merged:', _.merge(customQuery.where, specificIndustry));
}


