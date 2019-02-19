interface Person {
  name: string;
  age: number;
  hh: any;
}

type ReadyOnly<T> = { [P in keyof T]?: T[P] };

let p: ReadyOnly<Person>;
p = {
  name: 'yy',
  hh: 10
};

// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//   return o[name];
// }

// let a: number = getProperty(p, 'age');
// console.log(getProperty(p, 'age'));
// interface Person {
//   name: string;
//   age: number;
// }
// let obj = {
//   h:10,
//   m:20
// }
// let p: keyof obj;

// p = 'name';

// class haha {
//   public constructor(protected value = 0) {}
//   public add(value: number): this {
//     this.value += value;
//     return this;
//   }
// }

// function fn(x: 1 | 'wd') {}
// function h(x:number){
//   if(x!==1||x!==2)
// }
// function get(v: any): 1 | 2 | 'me' {
//   return 'me';
// }
// function setName(v: number): number;
// function setName(v: number, g: string): number & string;

// function setName(v: number): number {
//   console.log(arguments);
//   return 10;
// }
// setName(10, 'wdqwd');
// type types = 'w' | 'l';
// function getUi(n: types) {}
// getUi('p');
// type Alias = { num: number };
// interface Interface {
//   num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;
// type LinkedList<T> = T & { next: LinkedList<T> };

// interface Person {
//     name: string;
// }

// var people: LinkedList<Person>;
// var s = people.name;
// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;
// type Me = number;
// type Fn = () => number;
// type MeOrFn = Me | Fn;
// let m: Fn | Me;
// m = () => 10;

// type Ha<T, u> = {
//   name: T;
//   age: u;
// };
// let h: Ha<number, string> = {
//   name: 10,
//   age: 'wdwd'
// };
// type Tree<T> = {
//   name: T;
//   sub: Tree<T>;
// };
// let t: Tree<number> = {
//   name: 10,
//   sub: {
//     name:100
//   }
// };
// console.log(Tree<number>)
// console.log(h);
// m = 'wd';
// function h(name: string | null) {
//   function f() {
//     console.log(name.length);
//   }

//   return f;
// }

// function h(x: string | null): string {
//   return x!.charAt(0);
//   // return x || 'defaulte';
//   // if (x == null) {
//   //   return 'default';
//   // } else {
//   //   return x;
//   // }
// }
//如果在一个对象上调用
// class M {
//   name: string;
//   age?: number;
// }
// let m = new M();
// m.name = 'wqdqwd';
// // m.name=100
// m.age = 1020;
// m.age = undefined;
//一旦出现可选参数，那么可选参数会被加一个undefined类型
// m.age = null
// function h(x: number, y?: number) {
//   console.log(x + (y || 0));
// }
// h(1, 2);
// h(1);
// h(2, undefined);
//函数可选参数会自动分配一个undefined类型
// let u: null | undefined = null;

// u = undefined;
// interface F {
//   s(): void;
// }
// class A implements F {
//   s() {
//     console.log('s');
//   }
//   private height = 10;
// }
// let b: F = new A();

// console.log(b);
// function isNumber(x: any): x is number {
//   return typeof x === 'number';
// }
// function isString(x: any): x is string {
//   return typeof x === 'string';
// }
// function padStr(s: string | number) {
//   console.log((<string>s).length);
//   // if (typeof s === 'number') {
//   //   console.log(s.toString);
//   // } else {
//   //   console.log(s.length);
//   // }
// }

// padStr(10);
// console.log(isString(10));
// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }

// function getSmallPet(): Fish | Bird {
//   // ...
//   return {
//     swim() {
//       console.log('fish');
//     },
//     layEggs() {}
//   };
// }
// function isFish(pet1: Fish | Bird): pet1 is Fish {
//   return (<Fish>pet).swim !== undefined;
// }
// let pet = getSmallPet();
// console.log(isFish(pet));
// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }
// (<Fish>pet).swim();

// interface Named {
//   name: string;
// }
// function test<T>(obj: T) {
//   console.log((<any>obj).name);
// }
// test<Named>({ name: 'yangyong' });
// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }

// function getSmallPet(): Fish | Bird {
//   // ...
//   return {
//     fly() {},
//     layEggs() {}
//   };
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim(); // errors

// function padLeft(value: string, padding: number | string) {
//   if (typeof padding === 'number') {
//     return Array(padding + 1).join(' ') + value;
//   }
//   if (typeof padding === 'string') {
//     return padding + value;
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`);
// }

// padLeft('Hello world', 'true'); // returns "    Hello world"

// function extend<T, U>(first: T, second: U): T & U {
//   let result = <any>{};
//   for (let id in first) {
//     result[id] = first[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       result[id] = second[id];
//     }
//   }
//   return result;
// }
// class A {
//   constructor(public name: string = 'yangyong') {}
// }
// interface Loggerable {
//   log(): void;
// }
// class B implements Loggerable {
//   log() {
//     console.log('hahah');
//   }
// }

// let m = extend(new A('y'), new B());
// console.log(m);

// interface Empty<T> {
//   name:T
// }
// let x: Empty<number>;
// let y: Empty<string>;
// x = y;
// y = x;
// function get<T>(a: T): T {
//   console.log(a);
//   return a;
// }
// get<string>('10');
// class Animal {
//   name: string = 'yangyong';
//   constructor(private h: number) {}
// }

// let a = new Animal(1);
// console.log(a);
// export default {};
// enum Status {
//   ready,
//   error
// }
// enum Color {
//   red,
//   blue
// }

// let s = Status.ready;
// console.log(s);
// function invoker(args: any[], callback: (...rest: any[]) => void): void {
//   console.log(args);
//   callback(10);
// }
// invoker([1, 2, 3], (x?, y?) => console.log(x, y));
// enum EventType {
//   Mouse,
//   Keyboard
// }

// interface Event {
//   timestamp: number;
// }
// interface MouseEvent extends Event {
//   x: number;
//   y: number;
// }
// interface KeyEvent extends Event {
//   keyCode: number;
// }

// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
//   /* ... */
// }
// // Unsound, but useful and common
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

// // Undesirable alternatives in presence of soundness
// listenEvent(EventType.Mouse, (e: Event) =>
//   console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y)
// );
// listenEvent(EventType.Mouse, <(e: Event) => void>(
//   ((e: MouseEvent) => console.log(e.x + ',' + e.y))
// ));

// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));
// // let x = () => ({ name: 'yangyong' });
// // let y = () => ({ name: 'yangyong', age: 30 });
// // x = y;
// //当处理函数返回值的时候，多的赋值给少可以，反之少的赋值给多的不可以，两者必须有属性交集的情况
// //y = x;//error

// // let x = (a: number) => 0;
// // let y = (a: number, s: string) => 0;

// // y = x;
// // x = y;
// // console.log(y);
// // console.log(10);
// // interface Named {
// //   name: string;
// //   // age: number;
// // }

// // class Person {
// //   name: string;
// //   // age: number = 30;
// // }

// // let p: Named;

// // p = new Person();

// // interface Named {
// //   name: string;
// //   height: number;
// // }

// // let x: Named;

// // let y = {
// //   name: 'yangyong',
// //   age: 30,
// //   height: 183
// // };

// // // x = y;
// // // console.log(x);

// // function greet(n: Named): void {
// //   console.log(n);
// // }

// // greet(y);
export default {};
