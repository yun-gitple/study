
// a();
function a() {
    if ('jongha' === "jongha") {
        console.log("true :)");
    } else {
        console.log("false :(");
    }

    if ('jongha' == "jongha") {
        console.log("true :)");
    } else {
        console.log("false :(");
    }

    console.log("type: ", typeof 'jongha');
    console.log("type: ", typeof "jongha");

    let data1 = { a: 'ok', b: 123 };

    console.log("type: ", typeof data1); 

    class Man {

    };

    let man1 = new Man();

    console.log("type: ", typeof man1); 
}

// b();
function b() {
    let data = 'jongha';
    console.log(data.toUppercase());
}

c();
function c() {
  const states = [
    {name: 'jongha yun', capital: 'tokyo' },
    {name: 'dohyeon cho', capital: 'seoul' }
  ];

  for (const state of states) {
    console.log(state.capitol);
  }
}