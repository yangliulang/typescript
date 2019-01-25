type str = string;
let k1: str = '10';

console.log(k1);

interface MeM {
  name: string;
  age: number;
  getInfo: () => any;
}
let m: MeM = {
  name: 'yangyong',
  age: 30,
  getInfo() {
    return this.name + ':' + this.age;
  }
};
m.getInfo();
//DOM BOM内置对象
let body: HTMLElement = document.body;
let list: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  console.log(e);
});

//内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
let a: Object = new Array(1, 2, 3);
let f: Function = function() {};
// console.log(f);

//函数的类型-函数声明
function sum(x: number, y: number): number {
  return x + y;
}
//函数表达式
let mySum: (x: number, y: string) => any = function(x: number, y: string): any {
  console.log(x, y);
  return x + y;
};
//用接口方式定义函数的形状
interface SearchFn {
  (x: string, y: number): boolean;
}
let mySearch: SearchFn = function(xx: string, y: number) {
  return true;
};
//定义函数可选参数
//函数可选参数后面不能再跟着必选参数
function hahas(x: number, str?: string, m?: null): any {
  console.log(x, str);
  return x;
}
//函数默认值
//函数参数如果指定有默认值，那么ts会识别为可选参数
function hahsd(n: number = 10, m: number): number {
  console.log(n);
  return n;
}
//剩余参数
//rest事实上是一个数组，也可以用any[]来定义类型
function r1(x: any, ...rest: any[]) {
  console.log(rest);
}
//函数重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: string | number): number | string {
  console.log(
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  );
  return x;
}
//类型断言
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
