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
 * 
 */