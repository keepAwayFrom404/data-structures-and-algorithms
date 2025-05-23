/**
 * 方法1:使用Set无重复
 */
const arrayDeduplication1 = (arr) => Array.from(new Set(arr))

/**
 * es5
 */
const arrayDeduplication2 = (arr) => {
  var res = arr.filter(function(item, index, array) {
    return array.indexOf(item) === index // 只返回第一个元素
  })
  return res
}
console.log(arrayDeduplication2([1,2,3,1,2,2]));