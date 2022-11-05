
function switchTest(data: string | null | undefined) {
  switch(data) {
    case 'a': console.log('a'); break;
    case 'b': console.log('b'); break;
    case 'c': console.log('c'); break;
    case null: console.log(null); break;
    default: console.log('default', data);
  }
}

nullSwitch();
function nullSwitch() {
  switchTest(undefined);
}