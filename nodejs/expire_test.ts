import _ from 'lodash';

export const isJwtExpired = (token: string, graceDays: number = 0): Boolean => {
  let jwtExp;
  try {
    let jwt = JSON.parse(atob(token.split('.')[1]));
    jwtExp = jwt.exp ? jwt.exp : 0;
  } catch (e) {
    jwtExp = 0;
  }
  return jwtExp < _.now() / 1000 + 3600 * 24 * graceDays;
};

testNow();
function testNow() {
  const date1 = new Date('2021-01-01Z');
  console.log('data1:', date1.getTime() / 1000);
  console.log('now:', _.now());
  console.log(Date.parse('2021-01-01Z') / 1000);
}