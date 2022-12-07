
enum TestEnum {
  A = 'a',
  B = 'b',
  C = 'c'
}

testEnum();
function testEnum() {
  const data: TestEnum = TestEnum.A;
  let data2 = data;

  console.log('data:', data);
  console.log('data2:', data2);
  console.log('same:', data === data2);
  console.log('same:', data === 'a');
  console.log('same:', data == 'a');

  // const data3: Record<string, string> = {};
  const data3:any = {};
  data3['a'] = 'b';
  data3[1] = '1';

  console.log('record:', data3);

  const data4: Map<TestEnum, string> = new Map();
  data4.set(TestEnum.A, 'this is a');
  data4.get(TestEnum.A);

  data4.set(TestEnum.B, 'this is b');


  console.log(data4.entries());
}