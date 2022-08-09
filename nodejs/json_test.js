
function a() {
  var data = {
    linkTypeCode: "NOTIF",
    category: "BETTERDAY",
    sub_category: "investment"
  }

  console.log("data: ", data);

  console.log("data stringify: ", JSON.stringify(data));

  console.log("date: ", new Date(0));

  const subCategory = null;
  console.log("sub category: ", data[subCategory]);

  if(subCategory) {
    console.log(true);
  } else {
    console.log(false);
  }
}

term();

function term() {
  const data = {
    "code": "220801_FRIENDS_RECOMMEND",
    "title": "Recommend Friends~ Naver Points Are Given!",
    "descs": {
              "guide_line": 
                {
                  "title": "꼭 확인해주세요.", 
                  "1": "이벤트 참여는 총 2회만 가능합니다.", 
                  "2": "경품은 9월 1일에 일괄 발송되며, 경품 발송 시점에 탈퇴한 것으로 확인되는 회원에게는 경품이 지급되지 않습니다.", 
                  "3": "경품 발송 시점에 초대한 회원이 탈퇴한 것으로 확인되는 경품이 지급되지 않습니다.", 
                  "4": "정보가 불분명하거나 전화번호 오기입 등으로 인해 경품을 받지 못할 경우 모든 책임은 당첨자 본인에게 있습니다.", 
                  "5": "지급된 경품을 사용하시거나 분실/삭제한 경우, 사용날짜가 지난 경우 재발급이 불가능합니다.", 
                  "6": "비정상적인 방법으로 이벤트에 참여할 경우 경품이 지급되지 않거나 회수될 수 있습니다.", 
                  "7": "해당 이벤트는 베러의 영업 정책 및 업체의 사정으로 변경 또는 중단될 수 있습니다.", 
                  "8": "해당 이벤트는 마케팅 활용 동의 및 광고성  정보 수신 동의 시에만 참여가 가능합니다.", 
                }
            },
    "total_signup_count": 100000,
    "start_date": "2022-08-01T00:00:00",
    "end_date": "2022-08-31T00:00:00",
    "term_ids": "18,19",
    "start_conditions": {},
    "end_conditions": {}
  };

  console.log('data: ', data);
  console.log(' ~~~~~~~~~~~~~~~~~~~~ ');

  const strJson = JSON.stringify(data);
  console.log('string: ', strJson);

  console.log(' ~~~~~~~~~~~~~~~~~~~~ ');

  const recoverJson = JSON.parse(strJson);
  console.log('recovered: ', recoverJson);
}