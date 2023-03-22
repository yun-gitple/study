// a();
function a() {
  var data = 'Oh';

  console.log(data? 'OK': 'NO');

  var cond = 'development';

  console.log(cond, 'log level: ', 
  cond === 'local' || !cond
                ? 'debug'
                : cond === 'development'
                ? 'info'
                : 'warn');
}

// b();
function b() {
  let a = 0;
  let b = 10;

  a = b = 108;

  console.log('data:', a, b);
}

reg();
function reg() {
  // const regex = new RegExp('^find|^queryRaw]');
  const regex = new RegExp('^find|^queryRaw');
  

  let match1 = regex.exec('find');
  console.log('matched1:', match1);

  let match2 = regex.exec('queryRaw');
  console.log('matched2:', match2);
  
}