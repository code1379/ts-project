// 学习 ts 就是学习 ts 里面的类型

// 常见类型（ts包中内置了很多类型）
// 1. 基础类型
// 2. 高级类型 = 自定义类型

// ts 冒号后面都是类型标识，等号后面是值

// 1. ts 类型是从安全角度考虑的，一切从安全角度出发。 （number 不能赋值给 string）
// 2. ts是在开发的时候检测，不是在运行的时候，所以代码并没有被真正执行
// 3. ts中是具备类型推导的特点，不是所有的变量都需要添加类型，只有无法推断或者推断错误的时候我们才需要编写类型

// ts 最终编译后 类型 就消失了

/**
 * 一、原始类型进行标识
 */
const name: string = "dell";
const age: number = 18;
const male: boolean = true;

// * 原始数据类型都要采用小写的类型 string 而不是 String，大写类型是用来描述实例 => 包装类型
let s1: string = "abc";
// let s2: string = new String("abc"); // 不能将类型“String”分配给类型“string”。 “string”是基元，但“String”是包装器对象。如可能首选使用“string”。ts(2322)

let s3: String = new String("abc");
let s4: String = "abc";

// ! 调用方法的时候会把基本类型变成包装类型 "abc".charAt 默认当我们调用基本类型的方法时，会讲当前基本类型包装成对象类型
// string == 基本类型  String == 对象类型
// ! 在 ts 中，大写的类型 可以描述实例
// class Dog {}
// const d: Dog = new Dog();

// 数组的类型：[] 数组的概念 多个相同类型的数据集合，js中数组可以随意存放
// ts 中有两种方式可以标注数组类型
let arr1: number[] = [1, 2, 3, 4];
let arr2: string[] = ["a", "b", "c"];
let arr3: (string | number)[] = [1, 2, 3, "a", "b", "c"];
let arr4: Array<string | number> = [1, 2, 3, "a", "b", "c"]; // 采用泛型来声明数组

// ts 中的元组（特点是长度固定，类型固定）
let tuple: [string, number, boolean] = ["jw", 30, true];
let username = tuple[0];
// let wt = tuple[3]; // 报错
// ! 元组可以通过数组的方法新增，只能新增已存在的类型
// tuple.push({}); // 虽然能 push，但是不能取，因为定义的时候长度是3。
// 元组标识，意义不大，对于 promise.all 来说有用
let tuple1: [name: string, age: number, male: boolean] = ["jw", 30, true];

// 在真正开发的时候，肯定采用的都是模块化开发
export {};
