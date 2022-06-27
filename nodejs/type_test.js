const moment  = require('moment');

const date = new Date();

console.log('date: ', date);

const date1 = new Date('2022-05-26 17:38');

console.log('date1: ', date1);

console.log('moment: ', moment(date1).format('yyyy-MM-DD HH:mm'));
// console.log('moment: ' , moment().format('yyyy-MM- HH:mm'));