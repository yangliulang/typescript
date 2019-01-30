// function decorator(target) {}
// function decorator1(arg) {
//   return function(target) {
//     target.m = arg;
//   };
// }
// @decorator1(true)
// class M {}
// @decorator1(false)
// class N {}

// console.log(M.m, N.m);
// function decorator(target) {
//   target.prototype.getName = function() {
//     console.log(this.name);
//   };
// }
// @decorator
// class M {
//   name = 'yangyong';
// }

// let m = new M();
// m.getName();

// function mixins(...args) {
//   return function(target) {
//     Object.assign(target.prototype, ...args);
//   };
// }
// const Foo = {
//   getName() {
//     console.log(this.name);
//   }
// };
// @mixins(Foo)
// class M {
//   name = 'yangyong';
// }

// let m = new M();
// console.log(m);

// function readyOnly(target, name, descriptor) {
//   console.log(descriptor);
//   let getName = descriptor.value;
//   descriptor.value = function(name) {
//     console.log(100);
//     getName.apply(this, [name]);
//   };
//   return descriptor;
// }
// class M {
//   @readyOnly
//   getName(name) {
//     console.log('yangyong', name);
//   }
// }

// let m = new M();
// m.getName(10);
// class M {
//   #name = 10;
//   constructor() {
//     console.log(this.#name);
//   }
// }

// let s = new M();
console.log(10);
