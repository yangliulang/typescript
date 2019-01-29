// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return 'hello,' + this.greeting;
//   }
// }
// let greeter = new Greeter('world');
// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m.`);
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log('Woof!Woof!');
//   }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(100);
// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 5) {
//     console.log('Slithering...');
//     super.move(distanceInMeters);
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 45) {
//     console.log('Galloping...');
//     super.move(distanceInMeters);
//   }
// }
// let sam = new Snake('Sammy the Python');
// let tom: Animal = new Horse('Tommy the Palomino');

// sam.move();
// tom.move(34);
// class Animal {
//   private name: string;
//   public constructor(theName: string) {
//     this.name = theName;
//   }
//   public move(dist: number) {
//     console.log(dist);
//   }
// }

// let dog = new Animal('dog');
// console.log(dog.name);
// class Animal {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
// class Rhino extends Animal {
//   constructor() {
//     super('Rhino');
//   }
// }

// class Employee {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }

// let animal = new Animal('Goat');
// let rhino = new Rhino();
// let employee = new Employee('Bob');
// console.log(rhino);
// console.log((animal = employee));
// class Person {
//   protected name: string;
//   protected constructor(name: string) {
//     this.name = name;
//   }
// }
// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//     super(name);
//     this.department = department;
//   }

//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }
// class Octopus {
//   readonly name: string;
//   readonly age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let d = new Octopus('yangyong', 30);
// // d.name = 10;
// console.log(d.name);
// class Animal {
//   constructor(
//     public length: number,
//     private name: string,
//     protected h: number,
//     readonly age?: number
//   ) {}
//   move(dist: number) {
//     console.log(`${this.name} moved ${dist}m.`);
//   }
// }
// let m = new Animal(183, 'yangyong', 10, 32);
// console.log(m.length);
// class Employee {
//   fullName: string;
// }
// let employee = new Employee();
// employee.fullName = 'yangyong';
// if (employee.fullName) {
//   console.log(employee.fullName);
// }

// class Employee {
//   private _fullName: string;
//   get fullName(): string {
//     return this._fullName;
//   }
// }
// class Grid {
//   static origin = { x: 0, y: 0 };
//   constructor() {
//     console.log(Grid.origin);
//   }
// }
// new Grid();
// abstract class Department {
//   constructor(public name: string) {}
//   printName(): void {
//     console.log(this.name);
//   }
//   abstract getname(): string;
// }

// class M extends Department {
//   constructor() {
//     super('yangyong');
//   }
//   getname() {
//     return 'yangyong';
//   }
// }

// let m: Department;
// m = new M();
// function add(x: number, y: number): number {
//   return x + y;
// }
// // let myAdd = function(x: number, y: string): number {
// //   return x + Number(y);
// // };
// let myAdd = function(x: number, y: number): number {
//   return x + y;
// };
// let obj = {
//   name: 'yangyong',
//   info: {
//     job: 'it'
//   }
// };

// let {
//   name: n,
//   info: { job }
// } = obj;

// console.log(n, job);

// function buildName(firstName: string, lastName = 'yangyong', age: number) {
//   return firstName + lastName;
// }
// buildName('yangyong', undefined, 30);
// function buildName(name: string, ...rest: any[]) {
//   console.log(rest);
// }
// let fn: (name: string, ...rest: any[]) => void = buildName;
// fn('y', 1, 2, 3, 4);
// interface Card {
//   suit: string;
//   card: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function() {
//     return function(this: any) {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }.bind(this);
//   }
// };

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
// interface UIElement {
//   addClickListener(onclick: (this: void, e: Event) => void): void;
// }

// let ui: UIElement = {
//     addClickListener(onclick){
//         onclick()
//     }
// };
// ui.addClickListener(function(e) {
//   console.log(10);
// });
// let suits = ['hearts', 'spades', 'clubs', 'diamonds'];
// let o: { n: string; age: number }[] = [
//   {
//     n: 'yangyong',
//     age: 20
//   },
//   {
//     n: 'yangyong',
//     age: 20
//   }
// ];
// console.log(o);
// function getOfType(type: number): number;
// function getOfType(type: {
//   name: string;
//   age: number;
// }): { name: string; age: number };
// function getOfType(type: any): any {
//   if (typeof type == 'number') {
//     return type;
//   } else if (typeof type == 'object') {
//     return { name: 'yangyong', age: 30 };
//   }
// }
// console.log(getOfType('10'));
// function identity<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }
// // let fn: <u>(arg: u) => u = identity;
// let fn: {
//   <T>(arg: T): T;
// } = identity;

// // fn<number>(10);

// interface MyFn<T> {
//   (arg: T): T;
// }

// let fn1: MyFn<number> = function<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// };
// fn1(100);

// interface Person<T> {
//   name: T;
//   age: number;
// }
// interface Name {
//   text: string;
// }
// let m: Person<Name> = {
//   name: {
//     text: 'wqdwq'
//   },
//   age: 20
// };

// class Person<T> {
//   name: T;
//   constructor(age: T) {
//     console.log(age);
//   }
// }

// let p: Person<string> = new Person('30');
// interface Length {
//   length: number;
// }
// function indentity<T extends Length>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }
// indentity({ length: 10 });

// function getOfKey<T, K extends keyof T>(obj: T, key: K) {
//   console.log(obj[key]);
// }

// getOfKey('wqdqwd', 0);

// class Animal {
//   //   name: string;
//   constructor(private name: string) {}
// }

// function createFn<T>(c: new (n: string) => T): T {
//   return new c('yangyong');
// }
// let f = createFn(Animal);
// console.log(f);
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// console.log(Direction.Up);
// enum Response {
//   No = 0,
//   Yes = 1,
//   yes = 3,
//   no
// }
// function fn(x: string, y: Response): void {
//   console.log(y);
// }
// fn('yangyong', Response.Yes);
// enum F {
//   l = 30
// }
// enum Direction {
//   me = 1.2,

//   length = F.l
// }
// console.log(Direction);
// let x: (number | string)[] = [1, 'str'];
// window.onmousedown = function(mouseEvent) {
//   console.log(mouseEvent.button); //<- Error
// };
// window.onmousedown = function(mouseEvent: any) {
//   console.log(mouseEvent.button); //<- Now, no error is given
// };

// function getLength(str:number): number {
//   console.log((<number>str).length);
//   return str.length;
// }
// getLength(1000);
export {};
