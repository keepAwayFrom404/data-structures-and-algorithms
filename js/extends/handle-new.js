/**
 * 手写new函数
 * 1、创建一个对象
 * 2、将新对象绑定到传入对象原型
 * 3、绑定传入对象的属性方法
 * 4、返回新创建的对象（return 为新对象时返回新对象，否则返回1创建的对象）
 */
function fakeNew () {
  const obj = {}
  Fn = [].shift.call(arguments) // 拿到构造函数
  obj.__proto__ = Fn.prototype
  const ret = Fn.apply(obj,arguments)
  return typeof ret === 'object' ? ret : obj
}

function Fn(id, name) {
  this.id = id
  this.name = name
  return {a:1}
}

Fn.prototype.sayName = function () {
  console.log(this.name);
}

const fn = fakeNew(Fn, 28 ,'cadenli')
console.log(fn);