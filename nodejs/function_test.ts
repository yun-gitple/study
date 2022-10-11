import { mainModule } from "process";

function a(name: string) {
  console.log('a:', name);
}

function b(name: string) {
  console.log('b:', name);
}

interface FuncParam {
  a: (name: string) => void
};

type Func = (name: string) => void;

function c(func: (name: string) => void) {
  func('jongha');
}

// d();
function d() {
  c(a);
  c(b);
}

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

e();
function e() {
  console.log('1:', person.fullName());
  person.fullName = person.fullName.bind(member);
  console.log('2:', person.fullName());
}