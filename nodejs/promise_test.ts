import _ from 'lodash';

class PromiseTest {

   async genRandomLetters(length: number):Promise<string> {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const letters:string[] = [];
  
    for(let i = 0 ; i < length; i++) {
      letters[i] = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return letters.join('');
  }

  async testPromose() {
    const noWaitCase = this.genRandomLetters(6);
    console.log('result: ', noWaitCase, ', size: ', _.size(noWaitCase));
    
    const waitCase = await this.genRandomLetters(6);
    console.log('result: ', waitCase, ', size: ', _.size(waitCase));
  }
}

const promTest = new PromiseTest();

promTest.testPromose();
