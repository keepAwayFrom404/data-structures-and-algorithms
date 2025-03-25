/**创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。 */
function myCreate(obj) {
  function F(){}
  F.prototype = obj
  F.prototype.constructor = F
  return new F()
}

const a = {
  skill: [1,2],
  name: 'cadenli'
}

const b = Object.create(a)

a.skill.push(3)
console.log(a);
console.log(b.skill);