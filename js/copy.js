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
  // TODO: 处理循环引用
  const res = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const it = obj[key];
      if(isAny(it).includes('Array') || isAny(it).includes('Object') ){ // 处理数组
        res[key] = deepClone(obj[key])
      } else if(isAny(it).includes('RegExp')) { // 处理正则表达式
        res[key] = new RegExp(obj[key])
      } else if(isAny(it).includes('Function')) { // 处理函数：原型和闭包会丢失
        const temp = obj[key].toString()
        res[key] = new Function(`return ${temp}`)()
        for(let it in obj[key]) {
          if(obj[key].hasOwnProperty(it)) {
            res[key][it] = obj[key][it] // 复制函数属性
          }
        }
      } else { // 基础类型直接返回
        res[key] = obj[key]
      }
    } 
  }
  return res
}
const c = 1
const a1 = {
  foo: function(a, b) {
    return a + b + c
  },
  bar: [1,2,3,{a: 4}],
  name: 'cadenli',
  reg: /^cadenli/,
}
a1.foo.test = 'foo'
a1.foo.test2 = {}

const b1 = deepClone(a1)
b1.bar.a = 3
console.log(a1);
console.log(b1);
console.log(a1.foo.test2 === b1.foo.test2); // 对象属性需要特殊处理
// console.log(b1.foo(2,3)); // 闭包丢失
// b1[1].d.e = 4
// console.log(b1,'b1');
// console.log(a1);

// const c = deepClone(a)
// c.name = 'lidan'

// c.skill.push(7)

// console.log(a, c);
