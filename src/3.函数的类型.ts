// 函数的类型，主要关注 入参 和 返回值类型

// function sum(a: string, b: string): string {
//   return a + b;
// }

// 函数的声明方式 1. function 关键字 2.表达式声明
// type Sum = (x: string, y: string) => string;
// let sum: Sum = function (a: string, b: string) {
//   return a + b;
// };
// sum("1", "@"); // 以 x y 为主

// * 对于表达声明而言，我可以给变量重新赋值
// ! 表达式我们如果给变量写好了一个类型，就意味着我们赋予的值要满足这个类型

// ES6 中函数所有的特性都支持
// 可选参数、默认参数、剩余运算符
type Sum = (x: string, y?: string) => string;
let sum: Sum = function (a, b = "123") {
  return a + b;
};

let concat = (a: string, ...args: string[]) => {
  args.unshift(a);
  return args.join(",");
};

// typeof 取变量的类型 返回的是类型 keyof 取得是类型的 key
const person = { name: "dell" };

// const getName = (key: string) => {
//   return this[key];
// };
type Person = typeof person;
type PersonKeys = keyof Person;
// !this导致的问题是不方便类型推导，现在很少写这样的代码
function getName<T>(this: T, key: keyof T) {
  return this[key];
}

// @ts-ignore
// ((getName<Person>)).call(person, "name");

// 函数的重载：后端的定义，就是定义同名的方法，通过定义不同的入参来区分方法
// js 不支持函数的重载，ts就不支持，所以ts中的函数重载是伪重载（对参数的区分）
function toArray(str: string): string[];
function toArray(num: number): number[];

// ! 只有一个具体的实现
function toArray(x: string | number) {
  if (typeof x === "string") {
    return x.split("");
  } else if (typeof x === "number") {
    return x.toString().split("").map(Number);
  }
}

export {};
