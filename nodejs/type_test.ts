const moment  = require('moment');

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
