import _ from 'lodash';

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

sameFieldValue();
function sameFieldValue() {
  const data = { "name": "jongha"}

  const data2 = { data };

  console.log('data2:', data2);
}