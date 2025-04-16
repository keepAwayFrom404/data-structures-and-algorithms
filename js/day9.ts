// 返回到顶部的方法有哪些？把其中一个方法出来
const btn = document.getElementById('toTop')
btn.onclick = function(e) {
  // window.scrollTo({
  //   top: 0
  // })

  // location.href+='#'


  document.documentElement.scrollTop = 0
}