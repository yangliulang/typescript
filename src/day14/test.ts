namespace my {
  export let x = 10;
  export interface I {
    name: string;
  }
}
namespace my {
  export const k = 100;
  export let y = k;
  export namespace t {
    export let z = 30;
  }
  export interface I {
    height: number;
  }
}
interface P {
  name: string;
}
interface P {
  height: number;
  getName(x: number): void;
}
let p: P;
p = {
  name: 'yangyong',
  height: 183,
  getName(x) {
    console.log(this.name);
  }
};
// p.getName(1);
let m: my.I;
m = {
  name: 'haha',
  height: 183
};
// console.log(my.k);

namespace Me {
  export let name1 = 'yangyong';
  export function getName() {
    return name1;
  }
}
namespace Me {
  export function getHeight() {
    return name1;
  }
}
console.log(Me.getHeight());

export default {};

class Albm {
  label: Albm.Person;
  constructor(private name) {}
}
namespace Albm {
  export class Person {}
}

let a: Albm = new Albm(20);
// console.log(a);

function reset(v: number): void {
  reset.info.v = v;
}

namespace reset {
  export const info = {
    v: 10
  };
}

// console.log(reset.info);
// reset(100);
// console.log(reset.info);

enum Color {
  red,
  yellow,
  blue
}
namespace Color {
  export function setColor() {}
}

console.log(20);
