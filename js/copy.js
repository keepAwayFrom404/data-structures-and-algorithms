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
      } else if(isAny(it).includes('Function')) { // 处理正则表达式

      } else if(isAny(it).includes('Function')) { // 处理函数
        
      } else { // 基础类型直接返回
        res[key] = obj[key]
      }
    } 
  }
  return res
}

const a1 = [1,{b: 2, d: {
  e: 3
}}]

const b1 = deepClone(a1)
// b1[1].d.e = 4
// console.log(b1,'b1');
// console.log(a1);

// const c = deepClone(a)
// c.name = 'lidan'

// c.skill.push(7)

// console.log(a, c);
