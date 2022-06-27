export interface MdBankCommonTransactionsReq {
  org_code: string;
  account_num: string;
  seqno: string;
  from_date: string;
  to_date: string;
  next_page?: string;
  limit: number | string;
}

var data1: MdBankCommonTransactionsReq;
var data2: MdBankCommonTransactionsReq;

data1 = {
  org_code: 'a',
  account_num: '2',
  seqno: '1',
  from_date: '2022-10-12',
  to_date: '2022-11-12',
  next_page: '2',
  limit: 1
}

data2 = {
  org_code: 'b',
  account_num: '3',
  seqno: '2',
  from_date: '2023-10-12',
  to_date: '2023-11-12',
  next_page: '2',
  limit: 1
}

const key1 = `${data1}`;
const key2 = `${data2}`;
const key11 = `${JSON.stringify(data1)}`;
const key22= `${JSON.stringify(data2)}`;


console.log(`${data1}`);
console.log(`${JSON.stringify(data1)}`);

console.log('------------------')
console.log(`${data2}`);
console.log(`${JSON.stringify(data2)}`);

console.log('------------------')
console.log('same1: ', key1 === key2);
console.log('same11: ', key11 === key22);