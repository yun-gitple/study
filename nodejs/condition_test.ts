
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

testEmptyNil();
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