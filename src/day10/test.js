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
// console.log(10);

// class M {
//   @readyonly
//   name() {
//     console.log('this is yangyong!');
//   }
// }

// function readyonly(target, name, desc) {
//   let fn = desc.value;
//   desc.value = function(...args) {
//     console.log('hahah~');
//     fn.apply(this, args);
//   };
//   return desc;
// }

// let m = new M();
// m.name();
// function no(target, name, desc) {
//   console.log(desc);
//   desc.enumerable = false;
//   return desc;
// }
// class M {
//   @no
//   get height() {
//     console.log(100);
//   }
// }
// let m = new M();
// for (let k in m) {
//   console.log(k);
// }
// function log(target, name, desc) {
//   const fn = desc.value;
//   desc.value = function(...args) {
//     console.log(`你正在调用${name}方法....`);
//     fn.apply(this, args);
//   };
//   return desc;
// }
// class M {
//   name = 'yangyong';
//   @log
//   @log
//   getName() {
//     console.log(this.name);
//   }
// }

// let m = new M();
// m.getName();

const mixins = subClass =>
  class extends subClass {
    foo() {
      console.log('yangyong1');
    }
  };
class M {}
const m = mixins(M);
console.log(m);
