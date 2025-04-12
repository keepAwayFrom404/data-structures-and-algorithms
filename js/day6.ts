// 统计某一字符或字符串在另一个字符串中出现的次数
function countShowNum(str: string, chat: string) {
  let count = 0
  let temp = ''
  for(let str_item of str) {
    console.log(temp, chat.length);
    if(temp.length < chat.length && chat.includes(temp)) { // 还不满足的情况
      temp+=str_item
    } else if(temp.length === chat.length && chat.includes(temp)) {
      count++
      temp = ''
    } else {
      temp = str_item
    }
  }
  return count
}

function strCount(str: string, chat: string) {
  return str.match(new RegExp(chat, 'g')).length
}

console.log(countShowNum('abcdefghabcdeffasawagvbhjsab', 'js'));
console.log(strCount('abcdefghabcdeffasawagvbhjsab', 'a'));