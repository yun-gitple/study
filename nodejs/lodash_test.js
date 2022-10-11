const { merge } = require('lodash');
const _  = require('lodash');

// f();

function f() {

  const defEndConds = { asset_connect: '>= 1' };
  const defAssetConnect = _.get(defEndConds, 'asset_connect');
  console.log('~~~ def: ', defAssetConnect, Number(defAssetConnect.split(' ')[1]));
  const value = Number(defAssetConnect.split(' ')[1].trim());
  console.log('~~~ value: ', value);
}

function e() {

  const data = {
    ID: 1n,
    TERM_ID: 3n,
    START_CONDS: { signup_start: '>= 2022-07-01T00:00:00', asset_ever_connect: false }
  }

  console.log('~~~ data: ', data);
  console.log('~~~ signup_start: ', _.get(data.START_CONDS, 'signup_start'));
  console.log('~~~ asset_ever_connect: ', _.get(data.START_CONDS, 'asset_ever_connect'));
}

function d() {
  let completeData = { COMPLETE_DT: new Date() };
  let statusData = { END_CONDS_STATUS: 'endCondsStatus' };
  let data = { data: _.merge (completeData, statusData) };
  

  console.log('~~~ merged: ', _.merge(completeData, statusData) );
  console.log('~~~ merged data: ', data );
}

function c() {
  const data = 'abcd';
  console.log('~~~ array: ', _.toArray(data));
}

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


// merge1();

function merge1() {
  const updateData = {};
  _.merge(updateData, { TITLE: 'title' });
  _.merge(updateData, { DESCS: { guilde: { "1": "merge is good!"}} });
  _.merge(updateData, { END_DT: new Date() });

  console.log('~~~ update: ', updateData);
}

// omit();
function omit() {
  const data = {
    "profit": {
      "total": 9502934,
      "RETIREPS": {
        "total": 1015230,
        "RETIREPSDC": {
          "each": [
            {
              "PRDNM": "NH 적립형 IRP",
              "CORPNM": "농협은행",
              "amount": 1015230,
              "amount_rate": 0.007710358626801472
            }
          ],
          "total": 1015230,
          "total_rate": 0.007710358626801472,
          "total_RSRVAMT": 21958030
        },
        "total_rate": 0.007710358626801472
      },
      "PERSONALPS": {
        "total": 9502934,
        "total_rate": 0.01834896077090627,
        "total_RSRVAMT": 62250234
      },
      "total_rate": 0.015574853647188375
    }
  };

  console.log(_.omit(data, 'profit.PERSONALPS.total_RSRVAMT'));
}

last();
function last() {
  const data1 = [];
  const data2 = [{id:1}, {id:2}, {id:3}];

  console.log(_.last(data1)?.id);
  console.log(_.last(data2).id);
  console.log(_.last(undefined));
  console.log(_.last(null));
  console.log(_.last(''));
}