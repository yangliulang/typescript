//接口继承类
class Point {
  x: number;
  y: number;
}
interface Point3d extends Point {
  z: number;
}

let d3: Point3d = {
  x: 10,
  y: 20,
  z: 100
};

console.log(d3);
// class Point {
//   x: '10' = 10;
//   y = 20;
//   constructor() {
//     console.log(this.x, this.y);
//   }
// }
// console.log(new Point());

//接口继承
// interface Alarm {
//   alert();
//   age: string;
// }

// interface LightableAlarm extends Alarm {
//   lightOn();
//   lightOff();
// }
// // let o: LightableAlarm = {
// //   alert() {},
// //   lightOff() {},
// //   lightOn() {},
// //   age: 10
// // };

// class o implements LightableAlarm {
//   alert() {}
//   lightOff() {}
//   lightOn() {}
//   age = '10';
// }

//implements
// interface BaoJin {
//   alert(): any;
// }
// interface Skill extends BaoJin {
//   sha(): any;
// }
// class Meng {}

// class FangdaoMeng extends Meng implements BaoJin {
//   alert() {
//     console.log('aaa');
//   }
// }
// let fangdaoment = new FangdaoMeng();
// fangdaoment.alert();
// class Jincha implements Skill {
//   private name: number = 1000;
//   alert() {
//     console.log('biubie', this.name);
//   }
//   sha() {
//     console.log('sha');
//   }
// }
// let jincha = new Jincha();
// jincha.alert();
// interface M {
//   name: string;
//   age: number;
// }

// let me1: M = {
//   name: 'yy',
//   age: 30
// };
// //类的类型
// class Animal {
//   name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
//   public sayHi(): any {
//     return this.name;
//   }
// }
// let cat: Animal = new Animal('Cat');
//抽象类
// abstract class Animal {
//   public name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
//   public abstract sayHi(): any;
//   public abstract job: string;
// }
// class Cat extends Animal {
//   public sayHi() {
//     console.log(this.name);
//   }
//   public job = 'it';
// }

// let cat = new Cat('yangyong');
// cat.sayHi();
// let a = new Animal('Jack');
// new Person();
//public private protected abstract
// class Animal {
//   protected job = 'it';
//   public constructor(name: string) {
//     this.job = name;
//     console.log(this.job);
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//     console.log(this.job);
//   }
// }
// let cat = new Cat('Cat');
// console.log(cat.job);
