// day3:去除字符串中最后一个指定字符

function removeLastChat(str: string, chat: string) {
  let obj = {}
  for (let i = 0; i < str.length; i++) { // 统计最后一次下标
    const strIt = str[i];
    obj[strIt] = i
  }
  console.log(obj, 'obj ===>');

  return str.slice(0, obj[chat]) + str.slice(obj[chat] + 1)
}

console.log(removeLastChat('dfrtubonxapsoianbhjxvyvbjmlhhx', 'm'));