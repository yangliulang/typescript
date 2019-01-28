//当接口继承自一个类的时候
//创建的子类继承自那个类病指定implements face时
//那么这个类必须符合face的形状
//如果一个累直接集成自那个类 没有implements 无需罐组形状
// class Person {
//   private state: any;
// }
// interface Yang extends Person {
//   skill(): void;
// }

// class Me extends Person implements Yang {
//   skill() {}
// }
// class You {
//   skill() {}
// }

// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }
// function getCounter(): Counter {
//   let counter = <Counter>function(start: number) {};
//   counter.interval = 123;
//   counter.reset = function() {};
//   return counter;
// }
// let c = getCounter();
// console.log(c);
// interface Shap {
//   color: string;
// }
// interface Width {
//   width: number;
// }
// interface Square extends Shap, Width {
//   length: number;
// }
// let s = <Square>{};
// s.length = 10;
// s.color = 'red';
// s.width = 10;

// let s: Square = {
//   color: 'white',
//   length: 100
// };
// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//   tick();
// }

// class Clock implements ClockInterface {
//   constructor(hour: number, minute: number) {}
//   tick() {}
// }

// interface MyClass {
//   time: Date;
//   setTime(d: Date): void;
// }
// class Clock implements MyClass {
//   time = new Date();
//   constructor() {
//     // console.log(this.time);
//   }
//   setTime(d: Date) {
//     console.log(d);
//   }
// }
// new Clock().setTime(new Date());
// interface R {
//   readonly [index: string]: any;
//   name: string;
// }

// let o: R = {
//   name: 'dqw',
//   age: 30
// };
// o.name = 'wdw';
// console.log(o);
// interface StringArray {
//   [index: number]: string;
// }
// let arr: StringArray = ['w'];
// console.log(arr[0]);
// interface NumberDictionary {
//   [index: string]: string;
//   length: string; // 可以，length是number类型
//   name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
// }
//定义函数类型的签名
// interface FN {
//   (x: number, y: number, str?: any): any;
// }
// let fn: FN = function(x, y, z) {};
// fn(1, 2, 2);
//定义对象属性的签名
// interface O {
//   [propName: string]: any;
// }
// let o: O = {
//   name: 'yangyong',
//   get() {}
// };
// console.log(o);
// interface SearchFn {
//   (key: string, value: number): boolean;
// }

// let fn: SearchFn = function(key, value) {
//   console.log(key);
//   return true;
// };
// fn('me', 100);
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   // [propName: string]: any;
// }

// function createSquare(config: SquareConfig): void {}
// let congfig = { co: 'wdw', width: 100 };
// createSquare(congfig);
// createSquare({ co: 'wdw', width: 100 });
// createSquare({ co: 'wdw', width: 100 } as SquareConfig);
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro as number[]; // error!
// let a: number[] = [1, 2];
// let ro: ReadonlyArray<number> = a;
// // rarr[0] = 0;

// a = ro as number[];
// console.log(a);
// interface Point {
//   readonly x: number;
//   y: number;
// }

// let point: Point = {
//   x: 100,
//   y: 10
// };
// point.y = 0;
// console.log(point);

// interface Config {
//   length?: number;
//   callback(): string;
// }

// let config: Config = {
//   length: 10,
//   callback() {
//     return '10';
//   }
// };
// config.callback();
// function printLabel(labelledObj: { label: number }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: 'Size 10 Object' };
// printLabel(myObj);

// class Cs {
//   p = 10;
//   get() {
//     console.log(this.p);
//   }
// }
// let cs = new Cs();
// let { ...sdc } = cs;
// console.log(sdc);

// type C = { a: string; b?: number };
// function fn({ a, b = 90 }: C): void {
//   console.log(a, b);
// }
// fn({ a: '10' });
// type ss = string;
// let m: ss = 'wdq';
// console.log(m);
// let testObj = {
//   name: 'yy',
//   age: 30,
//   job: {
//     level: 1,
//     info: 'it',
//     sub: {
//       sub1: 10
//     }
//   }
// };

// let {
//   name,
//   job: {
//     level,
//     info,
//     sub: { sub1 }
//   }
// } = testObj;

// console.log(sub1);

// function keepWholeObject(obj: { a: string; b?: number }): void {
//   let { a, b: bb = 80 } = obj;
//   console.log(a, bb);
// }
// keepWholeObject({ a: '10' });
// let obj = { a: 1, b: 2 };
// let { a: d, cw = 90 }: { a: string | number; b?: number } = obj;
// console.log(d);

// let { aa, bb, ...res } = { aa: 10, bb: 20, cc: 90 };
// ({ aa, bb } = { aa: 100, bb: 2000 });
// // console.log(res);
// // console.log(aa, bb);
// let [x, y]: [number, any] = [1, 2];
// [y, x] = [x, y];
// // console.log(x);

// function foo(arr: number[][]) {
//   console.log(arr);
// }
// let arr3 = [1, 2, 3];
// let [a, b, ...as] = arr3;
// // console.log(a, b, as);
// let hahah1 = 10;
// function sumMatrix(matrix: number[][]) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++) {
//     var currentRow = matrix[i];
//     for (var i = 0; i < currentRow.length; i++) {
//       sum += currentRow[i];
//     }
//   }

//   return sum;
// }

// let str1: string = 'this is heheh!';
// let len: number = (<string>str1).length;
// let len1: number = (str1 as string).length;
// // console.log(len1);

// declare function create(o: object | null): void;

// // let fn: object = (): never => {};
// // fn();
// function never(): never {
//   throw 'wdqw';
// }
// // never();
// // 推断的返回值类型为never
// function fail(): any {
//   return Error('Something failed');
// }
// // function infiniteLoop(): never {
// //   while (true) {}
// // }
// //--strictNullChecks;
// let hah: number | string | boolean = undefined;
// let hah1: number | string | boolean = null;
// let u: undefined = undefined;
// let n: null = null;
// // console.log(u, n);

// let un: void;
// un = undefined;
// un = null;

// function getName(v: number | string, name1?: string): void {}
// getName(1, 'yangyong');
// let arr1: any[] = [1, '2', null, undefined, {}, () => {}];

// let notSure: any = 4;
// notSure.toFixed();
// let string: any;
// string = 10;
// string = 'wdqw';

// enum Color {
//   red = 1,
//   green = 6,
//   blue = 'wdw'
// }
// let c: Color = Color.blue;
// // console.log(Color['wdw']);

// let arr: [number, string] = [100, 'word'];

// let isDone: boolean = true;
// let isDone1: Boolean = false;
// let isDone2: Boolean = new Boolean(true);
// // console.log(isDone, isDone1, isDone2);

// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;

// // console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral);

// let name1: string = 'bob';
// name1 = 'yangyong';
// // name1 = 10;
// let name2: string = `${name1}`;
// // console.log(name2);
// let name3: string = 'wefwe' + 'wdqqw' + 10 + `wqdqwd`;

// let list: number[] = [1, 2, 3];
// let list1: Array<number> = [];

export {};
