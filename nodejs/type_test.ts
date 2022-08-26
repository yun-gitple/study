import moment from 'moment';
import _ from 'lodash';

const date = new Date();

// console.log('date: ', date);

const date1 = new Date('2022-05-26 17:38');

// console.log('date1: ', date1);

// console.log('moment: ', moment(date1).format('yyyy-MM-DD HH:mm'));
// console.log('moment: ' , moment().format('yyyy-MM- HH:mm'));

let notDef = undefined;
// console.log('notDef: ', BigInt(notDef));  // type error

export interface Notification {
  /**
   * The title of the notification.
   */
  title?: string;
  /**
   * The notification body
   */
  body?: string;
  /**
   * URL of an image to be displayed in the notification.
   */
  imageUrl?: string;
}

type messageType = {
  targetUsers: bigint[];
  notification: Notification;
  data: { [key: string]: string };
  messageType?: 'NOTIF' | 'AD';
  reserveTime?: any;
};

const eventType: messageType = {
  targetUsers: [BigInt(1)],
  notification: { title: '', body: ''},
  data: { category: 'EVENT', sub_category: ''},
  messageType: 'NOTIF'
}

// a();
function a() {
  const data = 10;
  console.log('type: ', typeof data === 'number');

  const name = 'jongha';
  const strName = JSON.stringify(name);
  const reName = JSON.parse(strName);
  console.log('string: ', strName, ', same: ', name === strName, name == strName);
  console.log('re name: ', reName, ', same: ', name === strName);

}

// b();
function b() {
  const var1 = {
    store: 'redisStore',
    db: 1,
    host: 'localhost',
    port: 2349,
    ttl: 100000 // 캐시 만료 시간입니다.(초)
  }

  const REDIS_OPTIONS = '{"sentinels":[{"host":"sentinel-1.sentinel","port":26379},{"host":"sentinel-2.sentinel","port":26379},{"host":"sentinel-3.sentinel","port":26379}],"name":"turple"}';

  console.log('merged: ', _.merge(var1, JSON.parse(REDIS_OPTIONS)));
}

// c();
function c() {
  const REDIS_OPTIONS='{"host":"127.0.0.1","port":6379}';

  console.log('merged: ', _.defaults({ store: 'redisStore', db: 1, ttl: 100000 }, JSON.parse(REDIS_OPTIONS)));
}
