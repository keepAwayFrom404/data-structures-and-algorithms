// 写一个加密字符串的方法
function encodeStr(str:string, shift = 1) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    res += String.fromCharCode(code + shift)
  }
  return res
}

function decodeStr(str:string, shift = 1) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    res += String.fromCharCode(code - shift)
  }
  return res
}
const str = encodeStr('hello world!')
console.log(str);
console.log(decodeStr(str));