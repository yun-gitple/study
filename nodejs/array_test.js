
const testUsers = [10, 539, 590];

var data = 10;
console.log(testUsers.includes(Number(data)));

testUsers.forEach( item => {
  console.log('~~~ item: ', item);
  if (item === 539) {
    return;
  }
});
