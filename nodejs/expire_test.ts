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