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

b();
function b() {
  let a = 0;
  let b = 10;

  a = b = 108;

  console.log('data:', a, b);
}