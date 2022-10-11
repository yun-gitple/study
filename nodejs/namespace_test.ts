namespace classBody {   //패키지 개념
  export class classA{  //export를 하지 않으면 컴파일 오류가 난다.
 public num : number = 10;  
  }

  export class classB{
 public num : number = 20;
  }

  export function method() : void{
      console.log('Just print..');
  }
}

a();
function a() {
  var cls = new classBody.classA();
  console.log(cls.num);

  cls = new classBody.classB();
  console.log(cls.num);

  classBody.method();  //함수는 굳이 new를 사용하지 않아도 된다.
}
