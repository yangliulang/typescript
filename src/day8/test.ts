// interface Named {
//   name: string;
// }

// let x: Named;
// let y = { name: 'yangyong', age: 30 };

// x = y;

// function greet(name: Named) {
//   console.log(name.name);
// }
// greet(y);
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;
// y = x;
// x = y
// let x = () => ({age:10});
// let y = () => ({age:20,l:20});
// y = x;
//如果输函数参数就行赋值，目标函数的参数必须是源函数的参数的子集
// let x = (n: string) => 0;
// let y = (n: string, age: number) => 0;
// y = x
//如果是函数返回值赋值原函数的返回值必须是目标函数的返回值的子集
// let x = () => ({ name: 'yangyong' });
// let y = () => ({ name: 'yangyong', age: 30 });
// x = y;
// function invokeLater(args: any[], callback: (...args: any[]) => void) {
//   /* ... Invoke callback with 'args' ... */
// }

// // Unsound - invokeLater "might" provide any number of arguments
// invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// // Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));
// function add(str: string): any;
// function add(str: string, age: number): any;
// function add(str: string): any {
//   console.log(str);
// }
// add('yangyong', 30);
// enum Status {
//   Ready,
//   Waiting
// }
// enum Color {
//   Red,
//   Blue,
//   Green
// }
// let status = Status.Ready;
//数字类型和枚举类型互相兼容，不同的枚举类型不兼容，不能相互赋值
// console.log(status);
// class Animal {
//   feet: number;
//   static hei: string = 'yangyong';
//   private name: string;
//   constructor(name: string, numFeet: number) {}
// }

// class Size {
//   feet: number;
//   //   private name: string;
//   constructor(numFeet: number) {}
// }

// let a: Animal;
// let s: Size;

// s = a;
// console.log(Animal.hei);
//类与对象字面量和接口差不多，
// interface Me<T> {
// //   data: T;
// }

// let x: Me<number>;
// let y: Me<string>;

// x = y;
// y = x;

export {};
