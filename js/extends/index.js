/**
 * 原型琏继承：
 * 优点：可继承原型上的属性和方法
 * 缺点：1、无法传递参数；2、原型上引用类型操作互相影响
 */

function Far(name, age) {
  this.name = name
  this.age = age
  this.skill = [1,2,3]
}

Far.prototype.say = function() {
  console.log(`${this.name}:${this.age}`);
}

// Far.prototype.skill = ['1','2']

function Son() {
  this.type = 'son'
}

Son.prototype = new Far()
const son1 = new Son('lidan', 16)
const son2 = new Son('lidan', 16)
son1.skill.push(4)
son1.type = 'son1'

// console.log(son1);
// console.log(son2);

/**
 * 构造函数继承：
 * 优点：继承构造函数的属性和方法，各个实例各自1套
 * 缺点：1、无法继承原型属性方法，构造函数中的方法每次实例都要初始化
 */

function Fan2(name,age) {
  this.name = name
  this.age = age
  this.skill = [1,2]
}

Fan2.prototype.say = function() {
  console.log('i am fan2 say');
}

function Son2(name, age) {
  Fan2.call(this, name, age)
  this.skill = [2,3]
}

Son2.prototype.hello = function() {
  console.log('i am son2 asy');
}

const son21 = new Son2('cadenli', 18)
const son22 = new Son2('klidan1', 2)
son21.skill.push(6)
// console.log(son21);
// console.log(son22);

/**
 * 组合继承：
 * 优点：继承原型与构造函数属性和方法
 * 缺点：构造函数的属性方法存在2份（原型中和构造函数中）
 */

function Fan3() {
  this.name = 'fan3'
  this.skill = [1]
}
Fan3.prototype.say = function() {
  console.log('i am fan3');
}

function Son3() {
  Fan3.call(this)
  this.type = 'son3'
}

Son3.prototype = new Fan3()
Son3.constructor = Son3.prototype
Son3.prototype.see = function() {
  console.log('i am son3 see');
}

const son31 = new Son3()
const son32 = new Son3()
son31.skill.push(6)
// console.log(son31);
// console.log(son32);

/**
 * 原型式继承：对象的拷贝
 * 优点：
 * 缺点：只是对象的浅拷贝，引用类型cun存在覆盖
 */
function createObj(obj) {
  function F(){}
  F.prototype = obj // 将需要继承的对象绑定到函数的原型上
  return new F() // 返回实力化后的对象，实例对象的原型指向obj
}

const temp = {
  name: 'cadenli',
  age: 18,
  skill: [1],
  say: function() {
    console.log(`${this.name}:${this.age}`);
  }
}

const obj1 = createObj(temp)
const obj2 = createObj(temp)

// console.log(obj1);
// obj1.skill.push(2)
// console.log(obj2.skill);

/**
 * 寄生式继承：在寄生继承的基础上增强对象能力
 * 优点：可对父类对象进行扩展，可传递参数
 * 缺点：传递参数不便，引用类型存在覆盖
 */

function createAnother(fan) {
  const clone = createObj(fan)
  clone.say = function() {
    console.log(this.skill);
  }
  return clone
}

const obj3 = createAnother(temp)
obj3.skill.push(1)
// console.log(obj3);
// const obj4 = createAnother(temp)
// obj3.say()
// console.log(obj4);

/**
 * 寄生式组合继承：当前大部分库的实现方案，也是class extends的实现；使用原型式继承原型属性和方法，绑定在原型上复用，使用构造函数继承实例属性和方法;
 * 优点：只调用一次父类构造函数，继承的属性和方法不会出现2次，不会在子类创建多余的属性和方法，同时保持原型琏正确
 */

function Fan4(name) {
  this.name = name
  this.skill = [1]
}

Fan4.prototype.getSkill = function() {
  console.log(this.skill);
}

function myCreate(a,b) { // 包装子类原型
  b.prototype = createObj(a.prototype)
  b.prototype.constructor = b
}

function Son4(name, age) {
  Fan4.call(this, name)
  this.age = age
}

myCreate(Fan4, Son4)

Son4.prototype.say = function() {
  console.log(`${this.name}:${this.age}`);
}

const son41 = new Son4('cadenli',18)
son41.skill.push(7)
const son42 = new Son4('lidan',8)
// console.log(son41);
// console.log(son42.say());

/**
 * 继承多个对象
 */

function Fanther1(name) {
  this.name = name
}
Fanther1.prototype.sayName = function() {
  console.log(this.name);
}
function Fanther2(age) {
  this.age = age
}
Fanther1.prototype.sayAge = function() {
  console.log(this.age);
}
function Son5(name, age) {
  Fanther1.call(this, name)
  Fanther1.call(this, age)
  this.skill = [1]
}

Son5.prototype = Object.assign(Fanther1.prototype, Fanther2.prototype)
Son5.prototype.constructor = Son5

Son5.prototype.saySkill = function() {
  console.log(this.name);
}

const son51 = new Son5('laoma', 57)
son51.skill.push(2)
const son52 = new Son5('qiaoqiao', 3)

// console.log(son51);
// console.log(son52);