function Parent(name,age) {
  this.name = name
  this.age = age
  this.skill = [1,2,3]
}

Parent.prototype.sayName = function () {
  console.log(`my name is: ${this.name},i am ${this.age} years old,i can ${this.skill}`);
}

// const parent = new Parent('cadenli', 28)
// parent.sayName()

/**
 * 构造函数继承
 * 只能继承父类实例属性和方法，无法继承原型
 */
function Child(skill) {
  Parent.call(this, 'cadenli', 28)
  this.skill = skill
}
// console.log(new Child([1,3,3]));
/**
 * 原型琏继承
 * 只继承了原型属性和方法，修改原型琏属性会互相影响
 */
function Child2() {
  this.type = 'child2'
}

Child2.prototype = new Parent()

const child2 = new Child2()
const child2b = new Child2()
child2.skill.push(4)


/**
 * 组合继承
 * 在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法(实例属性覆盖原型属性)
 */
function Child3() {
  this.type = 'child3'
  Parent.call(this)
}

Child3.prototype = new Parent()
Child3.prototype.constructor = Child3

const child3 = new Child3()
// console.log(child3);
/**
 * 原型式继承
 * 无法传递参数，实例指向的引用类型相同，可能篡改
 */
function Child4(obj) {
  function F(){}
  F.prototype = obj
  return new F()
}
const temp = {
  skill: [1,2,3],
  name: 'cadeli'
}
const child4 =  Child4(temp)
const child4b =  Child4(temp)
child4.skill.push(5)
// console.log(child4b.skill);

/**
 * 寄生组合继承：手动创建原型对象，减少new操作导致的实例与原型属性重复的问题
 */
function createPrototype(Sup,Sub) {
  const obj = Object.create(Sup.prototype)
  obj.constructor = Sub
  Sub.prototype = obj
}

function Child5(name, ...args) {
  this.type = 'child5'
  this.name = name
  Parent.call(this, ...args)
}

createPrototype(Parent, Child5)

const child5 = new Child5()
const child5b = new Child5()
child5.skill.push(4)
// console.log(child5);
// console.log(child5b);



