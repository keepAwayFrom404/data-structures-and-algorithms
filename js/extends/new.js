function myNew() {
  const obj = {}
  const F = Array.prototype.shift.call(arguments)
  obj.__proto__ = F.prototype
  const ret = F.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}

function Parent(name,age) {
  this.name = name
  this.age = age
}

Parent.prototype.say = function() {
  return `${this.name}:${this.age}`
}

const p1 = myNew(Parent,'cadenli',18)
console.log(p1.__proto__);