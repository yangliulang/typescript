// / <reference types='./types.d.ts'/>
// let s: MyString;
// s = 'yangyong';

// console.log(s);
// import './test.js';

export default {};
// // function d(value: any) {
// //   return function(target: Person) {
// //     console.log(target);
// //   };
// // }
// // class Person {
// //   @d(10)
// //   getName() {
// //     console.log(this.name);
// //   }
// //   name: string = 'yangyong';
// // }

// // let p = new Person();
// // p.getName();
// // console.log(p);
// // function f() {
// //   console.log('f(): evaluated');
// //   return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
// //     console.log('f(): called');
// //   };
// // }

// // function g() {
// //   console.log('g(): evaluated');
// //   return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
// //     console.log('g(): called');
// //   };
// // }

// // class C {
// //   @f()
// //   @g()
// //   method() {}
// // }
// // function setName(target, name, desc) {
// //   console.log('setName');
// //   // let val = args[2];
// //   let val = desc.value;
// //   desc.value = function() {
// //     console.log('....');
// //     val.call(this);
// //   };
// //   return desc;
// // }
// // function haha() {
// //   console.log('haha');
// //   return function(target, name, desc) {};
// // }
// // class Person {
// //   private name: string = 'yangyong';
// //   @setName
// //   @haha()
// //   getName() {
// //     console.log(this.name);
// //   }
// // }

// // let p = new Person();
// // p.getName();
// // let obj = {
// //   n: '10'
// // };
// // Object.preventExtensions(obj);
// // obj.n = 'yangyong';
// // console.log(obj);
// // @sealed
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   @des
//   greet() {
//     return 'Hello, ' + this.greeting;
//   }
//   get getget() {
//     console.log(this.greeting);
//     return this.greeting;
//   }
//   set setset(v: any) {
//     this.greeting = v;
//     console.log(this.greeting);
//   }
// }
// function des(target: any, propName: string, descriptor: PropertyDescriptor) {
//   // console.log(descriptor);
//   descriptor.value = function() {
//     return 'wdwdwd';
//   };
// }
// // function sealed(constructor: Function) {
// //   console.log(constructor);
// //   Object.seal(constructor);
// //   Object.seal(constructor.prototype);
// // }
// // Greeter.prototype.haha = 10;
// let p = new Greeter('hahah');
// p.getget;
// p.setset = 90;
// console.log();

// class M {
//   getName(v: any) {
//     return M.namea;
//   }
//   static namea = 'yangyong';
// }

// let m = new M();

// console.log(Object.getOwnPropertyNames(M.prototype));
