//外部枚举
declare enum HH {
  top,
  left
}
let hids = [HH.top];
console.log(hids);
//常数枚举-在编译完之后删除，并且不能存在计算成员
const enum H {
  top,
  left
}
console.log(H.left);
//枚举计算值
enum days3 {
  one = 1,
  tow = 2,
  three = <any>'wd',
  four = 'wdw'.length,
  five = 9
}
// console.log(days3);
enum Day2 {
  one = 1,
  tow = 10,
  three
}
Day2['one'];
// console.log(Day2);
//枚举
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
let Days1: any = {};
Days1[(Days1['one'] = 0)] = 'one';
//枚举执行key value互相映射

//元组
let xcatliu: [string, number];
xcatliu = ['dwqd', 100];
xcatliu.push(10);
xcatliu.push('wqdqw');
xcatliu.push(1, 2, 3, 4);
//字符串字面量类型
type events = 'click' | 'mousemove';
function addEvent(type: events) {
  document.addEventListener(type, function(e: Event) {
    console.log(e);
  });
}
