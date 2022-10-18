import { Observable, interval, from } from 'rxjs';
import { map, buffer, filter, concatMap } from 'rxjs/operators';
import axios from 'axios';

let observer = new Observable(
  (subscriber) => {
    try {
      subscriber.next("메시지1");
      subscriber.next("메시지2");
      // throw new Error('error from you!');
      subscriber.complete();
      subscriber.next("메시지3");
    } catch(e){
      subscriber.error(e);
    }
  }
);

// observer.subscribe();
// observer.subscribe(x => console.log('jongha:', x), e => console.log('jongha error:', e.message), () => console.log('발행완료'));
// observer.subscribe(x => console.log('jongha:', x), e => console.log('jongha error:', e.message));
observer.subscribe(x => console.log('jongha:', x));
