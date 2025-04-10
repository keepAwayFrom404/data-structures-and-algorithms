// 第4天 写一个方法把下划线命名转成大驼峰命名
function letterToCalm(str) {
  return str.replace(/_([a-z])/g, function(_, letter) {
    return letter.toUpperCase()
  })
}

console.log(letterToCalm('hello_world_example'));
