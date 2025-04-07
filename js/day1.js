/** day1:用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值 */
function getRandowRangeNum() {
  // 31: 32-2+1（生成31个数值）;floor：0-30整数共31个；从2开始到32
  return Math.floor(Math.random()*31)+2
}
function getArray(arr) {
  if(arr.length === 5) {
  return arr
  }
  // 生成2-32的随机数；判断是否重复
  let randomNum = getRandowRangeNum()
  while(arr.includes(randomNum)) {
    randomNum = getRandowRangeNum()
  }
  arr.push(randomNum)
  return getArray(arr)
}
const res = getArray([])
console.log(res);