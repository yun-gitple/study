import _ from 'lodash';
import { type } from 'os';

function objectA() {
  const endConds = {
    END_CONDS: { "asset_connect" : "> 0", "app_recommend": "= 2" }
  };

  interface EndCondition {
    asset_connect?: number;
    app_recommend?: string[];
  };

  const endCondition: EndCondition = {
  };

  const assetConnect = _.get(endConds.END_CONDS, "asset_connect");
  if (assetConnect) {
    // endCondition.asset_connect = 2;
  }

  const appRecommend = _.get(endConds.END_CONDS, "app_recommend");
  if (appRecommend) {
    endCondition.app_recommend = [];
  }

  console.log('~~~ result: ', endCondition.asset_connect);

};

enum EVENT_STATUS {
  READY,
  STARTED,
  COMPLETE
};

// objectMerge();
function objectMerge() {

  let queryDto = ''; // = "7, 8, 9";
  let condId: any = {};
  if (!_.isEmpty(queryDto)) {
    condId = { ID: queryDto.split(/, */).map((element) => Number(element)) };
  }

  let statusDto= ''; // = "started";
  let condStatus: any = {};
  if (!_.isNil(statusDto)) {
    switch (statusDto.trim().toUpperCase()) {
      case 'READY':
        condStatus = { STATUS: EVENT_STATUS.READY };
        break;
      case 'STARTED':
        condStatus = { STATUS: EVENT_STATUS.STARTED };
        break;
      case 'COMPLETE':
        condStatus = { STATUS: EVENT_STATUS.COMPLETE };
        break;
    }
  }

  console.log('~~~~ merge, ', _.merge(condId, condStatus));
};

function changeParam(data: {a: string, b: string}) {
  data.a = 'no';
}

// callByReference();
function callByReference() {

  const data = { a: 'ok', b: 'go home'};
  console.log('before:', data);

  changeParam(data);
  console.log('after:', data);
}

// sameFieldValue();
function sameFieldValue() {
  const data = { "name": "jongha"}

  const data2 = { data };

  console.log('data2:', data2);
}

class InsuConsent implements IConsent {
}

interface IConsent {
}

function inputObject(data: IConsent) {
  console.log('interface name:', data.constructor.name);
}

// nameTest();
function nameTest() {
  const data = sameFieldValue;
  const data1 = new InsuConsent();
  console.log('data:', data.constructor.name, ', typeof:', typeof data);
  console.log('data1:', data1);
  console.log('data1:', data1.constructor.name, ', typeof:', typeof data1);

  inputObject(data1);
}

interface DynamicType {
  INVEST_IRPS_ID: bigint;
  IRP_NO: number;
}

function dynamicKey(dType: DynamicType) {
  console.log('id:', dType.INVEST_IRPS_ID);
}

// testDynamic();
function testDynamic() {
  const idName =  { INVEST_IRPS_ID: 10n };

  const key = _.keys(idName)[0];
  _.set(idName, key, 22n);

  const data = {
    IRP_NO: 20
  }

  const merged = _.merge(idName, data);
  console.log('merged:', merged);
  dynamicKey(_.merge(idName, data));
}

// testArrayParse('');
function testArrayParse(apiList: any) {
  // const apiList = JSON.stringify([{api_uri: 'http://', api_code: 'AU10'}]);
  const apis:{ api_uri: string; api_code: string }[] = JSON.parse(apiList);
  console.log('apis:', apis);
}

// testNot(undefined)
function testNot(apiCodes: any) {
  const apiCode = 'CV01';
  console.log(!apiCodes?.includes(apiCode));
}

function receiveObject(consent: any) {
  console.log('name:', _.toString(consent));

  const flatCon = _.flatten(consent);
  console.log('flat:', flatCon);
}

testObjectName();
function testObjectName() {
  const MD_INSU_CONSENTS = {
    IS_SCHEDULED: true,
    END_DATE: '2022-11-24',
    MDF_DT: '2022-10-23'
  }

  receiveObject(MD_INSU_CONSENTS);
}
