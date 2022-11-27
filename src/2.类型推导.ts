// 声明一个变量没有给值的时候 默认类型是 any
let name;

name = "jw";
name = 13;

let myName = "dell"; // 等号左边的类型，可以通过右边自动推导，此时就不用添加类型了
// myName = 30;

// const let 区别
// const 意味着 值不能发生改变，类型范围更小。let可以改变值，会推断的范围大
const PI = 3.14;

// 1）联合类型
// 在没有确定值之前，只能采用联合类型中都有的方法。
let strOrNumber: string | number;
// !非空断言 ，我断定这个属性一定有值，出错了自己负责
// strOrNumber!.toString()
strOrNumber = "ABC";
strOrNumber.toLowerCase()

strOrNumber = 123;
strOrNumber.toFixed()

// 联合类型 是并集还是交集？ => 并集 ||  并集意味着全部的意思，交集意味着两者共有的东西

// 2）非空断言
let ele = document.getElementById("root")

// ? 是 js 语法，叫链判断运算符，这个值没有就不取值了
// ! 意味着这个值存在，是 ts 语法
// ele?.style.background = ''; // 可选链不能赋值
ele!.style.background = ''; // ! 意味着我认为这个元素一定有值

// const ref = ref<HTMLElement>(null)
// mounted(() => {
//   ref.value!
// })

// ?? || && 都是 js 语法

// * 我们需要将某个类型直接作为某个类型来使用 类型断言

let strOrNumber1 : string | number;

(strOrNumber1! as string).indexOf("1"); // 类型推断
(<number>strOrNumber1!).toFixed(); // 下面这种不推荐


// strOrNumber1 as boolean; // 断言只能断言已经存在的类型
(strOrNumber1! as any) as boolean; // 缺点：会破坏原有的类型，不建议使用

// 断言，我可以指定特定的类型

// 字面量类型
const username: "dell" = "dell";
const age: 18 = 18;
// 字面量类型和联合类型一起使用。就更加灵活了
// type 关键字和 enum 都是ts 提供的，和 js 没关系
type Direction = "left" | "right" | "top" | "bottom"; // 字面量类型，就是固定了值 和 枚举类似
let direction: "left" | "right" | "top" | "bottom";

export {}
