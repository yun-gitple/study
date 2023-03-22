
class Animal {

  constructor(private name: string) { }

  makeSound(input : string) {
      throw new Error('This method is abstract');
  }

  move() {
    this.makeSound('jongha');
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  makeSound(input : string) {
    console.log("sssss " + input);
  }
  move() {
      console.log("Snake Slithering...");
      super.move();
  }
}

// testVirtualFunction();

function testVirtualFunction() {
  const jonghaS = new Snake('ok');
  jonghaS.move();
}

// testDelete();
function testDelete() {
  interface DataType {
    item1: string;
    item2?: string;
    item3: string;
  };

  const data1:DataType = {
    item1: 'yun',
    item2: 'jongha',
    item3: 'ok'
  };

  console.log('data1: ', data1);

  delete data1.item2;
  console.log('data1: ', data1);

  const data2 = ['yun', 'jongha', 'ok'];

  console.log('data2: ', data2);

  delete data2[1];
  console.log('data2: ', data2);

}

testObjectSize();
function testObjectSize() {
  const data = {
    data1: 'yun',
    data2: 'jongha',
    data3: 'the light'
  }

  const dataStr = 'yun jongha the light';

  console.log("obj size1:", Object.keys(data).length);
  console.log("obj size1.1:", Object.keys(JSON.stringify(data)).length);
  console.log("obj size1.2:", typeof data === 'string');
  console.log("obj size1.3:", typeof JSON.stringify(data) === 'string');
  console.log("obj size2:", Object.keys(dataStr).length);
}