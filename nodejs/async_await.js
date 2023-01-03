const currentT = require('worker_threads');

const cond = true;

function executePromise(currentI) {

    promise = new Promise();

    return promise;
}

function threadId() {
    return ' T[' + currentT.threadId + ']';
}

async function asyncPromise() {
    console.log('\n --- : 1', threadId());
	//var promise = executePromise(0);
    console.log('\n --- : 2', threadId());

	 try {
		let result = await (() => { //객체를 생성하는 순간에 내부 코드가 수행됩니다.
	    console.log('+++ start promise, ', threadId());
	    if(cond) {
	        console.log('+++ before then', threadId());
	        let iter = currentI + 2;
	        while( currentI++ < iter) {
	            console.log('+++ during condition i: ', currentI, threadId());
	        }
	        //_then("resolve!!");
	        console.log('+++ after then', threadId());
	    } else {
	        console.log('+++ before catch', threadId());
	        //_catch('fail');
	        console.log('+++ after catch', threadId());
	    }
	    console.log('+++ end promise', threadId());
    	});

	    console.log('\n --- : 3 result: ', result, threadId());
	 } catch (error) {  //promise.catch(error)와 동일한 코드입니다.
	    console.log('\n --- : 4 error: ', error, threadId());
	 }
}

// console.log('\n before async: ', threadId());
// asyncPromise();
// console.log('\n after async: ', threadId());

main()

function main() {
    sub();
}

async function sub() {
    console.trace('before sleep');
    const resolved = await delay(5000);
    console.trace('after sleep', resolved);
}

function delay(ms) {
    return new Promise(resolve => {
				console.log('before set timeout!');
        setTimeout(() => resolve('done!!'), ms);
				console.log('after set timeout!');
    });
}