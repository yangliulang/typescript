interface fn {
  (name: string, age: number): any;
}

let fn1ds: fn = function(name: string, age: number) {
  return name + ':' + age;
};

//多类型泛型
// function login<N, S>(name: [N, S]): any {
//   console.log(name);
//   return name;
// }
// login<number, string>([0, 'kaka']);
//对泛型进行约束
// interface ll {
//   length: number;
// }
// function login<T extends ll>(args: T): any {
//   console.log(args.length);
//   return args;
// }
// login<string>('qdwdqwd');
// function createArray<T>(length: number, value: T): Array<T> {
//   let ret: T[] = [];
//   for (let i = 0; i < length; i++) {
//     ret[i] = value;
//   }
//   return ret;
// }
// let arr = createArray<string>(5, 'x');
// console.log(arr);
// function createArray(length: number, value: any): Array<any> {
//   let ret = [];
//   for (let i = 0; i < length; i++) {
//     ret[i] = value;
//   }
//   return ret;
// }
// let arr = createArray(10, 'x');
// console.log(arr);

// interface Color {
//   [propName: string]: any;
//   get(color: any): void;
// }

// let color: Color = {
//   color: 'red',
//   get(color: any): void {
//     console.log(this.color);
//   }
// };
