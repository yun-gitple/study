import _ from 'lodash';

class PromiseTest {

   async genRandomLetters(length: number): Promise<string> {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const letters:string[] = [];
  
    for(let i = 0 ; i < length; i++) {
      letters[i] = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    const result = letters.join('');

    console.log('~~~ random letters: ', result);

    if (length === 8) {
      throw new Error('length is 8');
    }

    return result;
  }

  async testPromose() {
    const noWaitCase = this.genRandomLetters(6);
    console.log('result: ', noWaitCase, ', size: ', _.size(noWaitCase));
    
    const waitCase = await this.genRandomLetters(8);
    console.log('result: ', waitCase, ', size: ', _.size(waitCase));
  }

  async testSelectedAll() {
    // const prom1 = this.genRandomLetters(6);
    // const prom2 = this.genRandomLetters(8);
    // const prom3 = this.genRandomLetters(10);

    console.log('~~~ 1 selected all ');
    // const result = Promise.allSettled([prom1, prom2, prom3]);
    const result = Promise.allSettled([]);
    console.log('~~~ 2 selected all, result: ', await result);
  }

  async testAll() {
    const prom1 = this.genRandomLetters(6);
    const prom2 = this.genRandomLetters(8);
    const prom3 = this.genRandomLetters(10);

    console.log('~~~ 1 all ');
    const result = Promise.all([prom1, prom2, prom3]);
    console.log('~~~ 2 all, result: ', await result);
  }

  async testRace() {
    const prom1 = this.genRandomLetters(6);
    const prom2 = this.genRandomLetters(8);
    const prom3 = this.genRandomLetters(10);

    console.log('~~~ 1 race ');
    const result = Promise.race([prom1, prom2, prom3]);
    console.log('~~~ 2 race, result: ', await result);
  }
}

// const promTest = new PromiseTest();

// promTest.testPromose();

// promTest.testSelectedAll();
// promTest.testAll();
// promTest.testRace();

async function testPromise1() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('~~~ p1');
      resolve("## p1");
    }, 3000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('~~~ p2');
      resolve("## p2");
    }, 1000);
  });

  const pResult = await Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
    return 'jonghs got done!';
  });

  console.log('p result:', pResult);
};

// main();
async function main() {
  await testPromise1();
}

function returnPromise() {
  return new Promise(resolve => {
    console.log('start promise');
    resolve('resolve!');
    console.log('end promise');
  });
}

function testRetPromise() {
  console.log('1');
  const pro = returnPromise();
  console.log('2');
  pro.then(value => {
    console.log('then! vlaue:', value);
  });
  console.log('3');
}

// testRetPromise();
async function testPromiseThen() {

  console.log('1');
  try {
    const prom1 = await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      .then(() => {
        console.log('prom1: is done!');
        return 'prom1 done!';
      })
      .catch((err) => { 
        throw new Error('prom1 ' + err); 
      }); //console.log('prom1 ' + err));

    console.log('prom1: ', prom1);
    console.log('2');
  } catch (err) {
    console.log('caught prom1 ' + err);
  }

  try {
    const prom2 = await new Promise((resolve, reject) => setTimeout(reject, 1000));
    console.log('3');
  } catch (err) {
    console.log('prom2 ' + err);
  }
}

// testPromThen();
async function testPromThen() {
  await testPromiseThen();
}

// testSleep();
function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
async function testSleepAsync() {

  console.log('sleep start', new Date());
  await sleep(3000);
  console.log('sleep end', new Date());
}
function testSleep() {
  testSleepAsync();
}

innerAsync();
function innerAsync() {
  console.log('inner_async, start');
  setTimeout(async () =>
    await testSleepAsync()
  );
  console.log('inner_async, end');
}
