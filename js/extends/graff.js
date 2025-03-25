function Parent(name,age) {
  this.name = name
  this.age = age
}

Parent.prototype.say = function() {
  return `${this.name}:${this.age}`
}
const p1 = new Parent('cadenli', 18)


function Child() {
  this.type = 'child'
  Parent.call(this,...arguments)
}

Child.prototype = Object.create(Parent.prototype)

const c1 = new Child('lidan', 16)
console.log(c1.constructor);