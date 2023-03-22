
function switchTest(data: string | null | undefined) {
  switch(data) {
    case 'a': console.log('a'); break;
    case 'b': console.log('b'); break;
    case 'c': console.log('c'); break;
    case null: console.log(null); break;
    default: console.log('default', data);
  }
}

// nullSwitch();
function nullSwitch() {
  switchTest(undefined);
}

// testEmptyNil();
function testEmptyNil() {
  const data1 = undefined;
  const data2 = null;
  const data3 = '';

  if (data1) {
    console.log('undefined is true');
  } else {
    console.log('undefined is false, data:', data1);
  }

  if (data2) {
    console.log('null is true');
  } else {
    console.log('undefined is false, data:', data1);
  }

  if (data3) {
    console.log('empty is true');
  } else {
    console.log('undefined is false, data:', data1);
  }
}

testOR();
function testOR() {
  const data1 = null;
  const data2 = undefined;
  const data3 = '';
  const data4 = false;
  const data5 = true;
  const data6 = 'GOOD!';

  console.log('data1: ', data1 || 'OK');
  console.log('data2: ', data2 || 'OK');
  console.log('data3: ', data3 || 'OK');
  console.log('data4: ', data4 || 'OK');
  console.log('data5: ', data5 || 'OK');
  console.log('data6: ', data6 || 'OK');
}