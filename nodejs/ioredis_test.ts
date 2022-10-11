import Redis from 'ioredis';

const redis = new Redis();

export interface InvestGlidePath {
  id: string;
  glide_score: string; // 61점
  glide_rate: string; // 42.49
  invest_rate: string; // 9.12
  message5: string; // 50대 초반이시군요 \n위험자산은 42.48889003658878% 수준에서 가져가시는 것이 좋아요. \n현재 위험자산 비중 9.120000000000001% 는 다소 낮아요
}

// a();
async function a<T>(data: any) {
  const key = 'diag:invest:remote:glide-path';
  const value = data as T;
  const strValue = JSON.stringify(value);
  console.log('data:', data);
  console.log('str value:', strValue);

  await redis.hset(key, data.id, strValue);
  const result = await redis.hget(key, data.id);

  console.log('result:', result);
  console.log('result parse:', JSON.parse(result!));
  console.log('result object:', JSON.parse(result!) as T);
}

async function hgetHset() {
  const data1 = {
    id: '19',
    glide_score: '61점',
    glide_rate: '42.49',
    invest_rate: '9.12',
    message5: '50대 초반이시군요 \n위험자산은 42.48889003658878% 수준에서 가져가시는 것이 좋아요. \n현재 위험자산 비중 9.120000000000001% 는 다소 낮아요'
  }

  const data2 = 'this is life';
  const data = 10;

  await a(undefined);
}

async function basic() {

}

main();
async function main() {
  // await hgetHset();
  const result = await redis.hset('1', '2', '3');
  console.log('result:', result);
}

