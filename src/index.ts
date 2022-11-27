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

// 3> ts中的枚举 自带类型的对象。枚举的值如果没有赋值，从 0 开始 递增的。反举，只能在值为数字的情况下
// 状态码、接口的定义、权限、标识位
let person = { name: "xxx" };
enum USER_ROLE { // 代码中的常量可以全部采用枚举，提示友好，使用方便
  USER,
  ADMIN,
  SUPER_ADMIN
}
console.log('USER_ROLE.USER', USER_ROLE.USER)
console.log('USER_ROLE[0]', USER_ROLE[0])

let c = USER_ROLE.USER

// 常量枚举，不能反举（一般不采用反举(使用索引)，都采用常量枚举）不会生成对象，而是直接将值拿出来
const enum DIRECTION {
  LEFT,
  RIGTH,
  TOP,
  BOTTOM
}

// 4> null undefined 默认情况下， null 和 undefined 只能赋值给 null 和 undefined
const n = null;
const u = undefined;

// 如果在非严格null检查的情况下，那么 undefined 和 null 是任何类型的子类型
// 一般默认开启
let string: string = "string";
// strictNullChecks: false
// string = null;
// string = undefined;

// 5> void 类型 空类型，函数的返回值可以用 void 表示，其他情况下用不到
// undefined 和 void 的区别 // undefined 可以赋值给任何值
function fn1() {
}
function fn3() {
  return;
}
function fn2(): void {
  return undefined;
}

// 6> never 任何类型的子类型，never 意味着值不可能出现
// 1. 函数无法到达
function whileTrue(): never {
  while (true) { }
}

function throwError(): never {
  throw new Error()
}

function fn4() {
  throwError();
  console.log("111")
}

// 校验逻辑完整性 可以利用 never 特性实现完整性保护
function validateCheck(value: never) {}
function getResult(strOrBooleanOrNumber: string | boolean | number) {
  // 在内部写 js 逻辑的时候，要对每种类型做处理
  // 如果是字符串 'abc' => ['a', 'b', 'c']
  // 数字 123 [1,2,3]
  // true [t, r, u , e]
  if(typeof strOrBooleanOrNumber === 'string') {
    return strOrBooleanOrNumber.split("")
  } else if (typeof strOrBooleanOrNumber === 'number') {
    return strOrBooleanOrNumber.toString().split("")
  } else if(typeof strOrBooleanOrNumber === 'boolean' ) {
    return strOrBooleanOrNumber.toString().split("")
  }


  // ! 没有写 boolean 但是没报错
  // 校验这个东西完不完整
  // * 如果达不到 never 则可以正常运行
  validateCheck(strOrBooleanOrNumber) // * 将 boolean 类型赋值给了 never
}


// string number boolean  null undefined 枚举 元组 数组 never void object

// Object.create()
// 大写的 Object 类型不用（万物皆对象，最终会找到 Object） craete(1)
// {} 字面量类型 {} = new Object() 一般不会这样使用 create(1)
function create(target: object) {} // new Proxy()

create({})
create(function() {})
create([])

// symbol bigint 基本不使用
const sb1: symbol= Symbol();
const sb2: symbol= Symbol();

const big: bigint = BigInt(Number.MAX_SAFE_INTEGER + 100); // bigint 不能赋值给 number

// any 不进行类型检测，一旦用户写了 any 之后，所有的校验都消失了。如果一个变量没有赋值 默认类型是 any
let arr: any = [] // 能不写 any 就不写 any 写多了就变成 anyScript
arr();
arr.xxx;
arr = []
// 出问题了 自己负责


// 在真正开发的时候，肯定采用的都是模块化开发
export { };
