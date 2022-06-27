var data = 'Oh';

console.log(data? 'OK': 'NO');

var cond = 'development';

console.log(cond, 'log level: ', 
cond === 'local' || !cond
              ? 'debug'
              : cond === 'development'
              ? 'info'
              : 'warn');