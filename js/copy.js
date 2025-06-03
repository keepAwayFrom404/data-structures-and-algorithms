/** 浅拷贝：仅拷贝第一层基础类型，引用类型互相影响 */
const a = {
  name: 'cadenli',
  skill: [1,2,3],
  say: function() {
    console.log('my name is cadenli');
  },
  reg: /^cadenli$/
}

function copy(a) {
  return {...a}
}

const b = copy(a)
b.name = 'lidan'

b.skill.push(7)

// console.log(a,b);

const isAny = (v) => Object.prototype.toString.call(v)

const deepClone = function(obj) {
  
  // 处理数组
  // 处理函数
  // 处理正则表达式
  // 处理循环引用
  // 基础值
}

// const c = deepClone(a)
// c.name = 'lidan'

// c.skill.push(7)

// console.log(a, c);
