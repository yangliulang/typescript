//原始值得定义-类数组
function likeArr() {
  let arg: IArguments = arguments;
  console.log(arg);
}
likeArr();

//原始值得定义-数组的类型
let arr1: number[] = [1, 2]; //数组项必须是number
let arr2: string[] = ['s', 's1']; //数组项必须是string
let arr3: any[] = [1, '2', null, undefined, [], {}, true, () => {}];
let arr4: (string | number | boolean)[] = [1, '2'];
arr4.push(1, '3', true);
let arr5: Array<any> = [null, undefined];
interface NumberArray {
  [i: string]: any;
}
let arr6: NumberArray = [1, 2, 3, 'p'];
interface AnyArray {
  [index: number]: any;
}
let arr7: AnyArray = [1, false, 'oo', {}, null, undefined, () => {}, []];
// console.log(arr7);

//原始值得定义-对象的类型——接口
interface Person {
  readonly id: number;
  name: string;
  age?: string;
  [propName: string]: any;
}
//一旦通过[propName:xx]设置了任意属性，那么任意属性的类型被确定，添加的子属性也必须一致
let p1: Person = {
  id: 100,
  name: 'wqdqw',
  age: '10'
};
// p1.id = 2000;

interface Me {
  name: string;
  age: number;
  job: object;
  hehe?: number; //可选属性
  jj?: any;
  [propName: string]: any;
}
//变量的定义必须和接口的形状一致，多少都是不行的
let me: Me = {
  name: 'yangyong',
  age: 30,
  job: {
    it: 'web development'
  },
  jj: 10,
  jt: 10
  //   hehe: 10
};

// console.log(Me);
//原始值得定义-访问联合类型的属性或方法
function some1(v: number | string): string {
  return v.toString();
}
let some2: number | string;
some2 = 'str';
// console.log(some2.length);ok
some2 = 10;
// console.log(some2.length);error

//原始值得定义-联合类型
let l1: string | number | boolean = 10;
l1 = 'heihei';
l1 = true;
let l2: boolean | string | null | undefined | number;
l2 = undefined;
l2 = 10;
l2 = 'l2';

//原始值得定义-类型推断
let haha = 'haha'; //根据赋值得值就行推断为字符串
haha = 'wdwd'; //ok
let haha1 = true;
haha1 = false; //ok
// haha1 = 10;erroe
//haha = 10//error

//原始值得定义-any
let any1: any = 1020;
any1.name = 'yangyong';
let any2: any = {};
any2.name = 'yangyong';
let any3: any; //let any3;
any3 = 10;
any3 = null;

//原始值得定义-Null 和 Undefined
let undefined1: undefined = undefined;
let null1: null = undefined;
let null2: null = null;
let undefined2: undefined = undefined;
let v1: void;
let num7: void = v1;

//原始值得定义-空值
function fn1(x: number): void {
  console.log(x);
}
let u1: void = undefined;
let u2: void = null;
let u3: void;

//原始值得定义-string
let str1: string = 'this is string';
let str2: String = 'this is string';
let str3: String = new String('this is string');
let str4: string = `this is from : ${str1}`;

//原始值得定义-boolean
let is1: boolean = true;
let is2: boolean = false;
let is3: Boolean = new Boolean(true);
let is4: Boolean = new Boolean(0);
let is5: Boolean = new Boolean('');

//原始值得定义-number
let num1: number = 10;
let num2: Number = new Number(10);
let num3: number = NaN;
let num4: number = -Infinity;
let num5: number = -Infinity;
let num6: number = 0xf00d;
