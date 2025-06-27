/**
 * debounce: 防抖，延迟多长时间内仅执行一次，如果再次触发则重新计时，比如回城操作
 * 常用场景：输入搜索，停下300ms之后才触发搜索；resize事件监听，停下之后再触发回调
 */

function debounce(fn, time, immedate = false) {
  let timer = null;
  return function (args) {
    const that = this;
    if (immedate) {
      fn(that);
      immedate = false;
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(that, args);
      clearTimeout(timer);
    }, time);
  };
}

/**
 * throttle: 节流，每多少时间间隔执行一次，比如开枪点击次数再多射速也是均匀的
 * 常用场景：鼠标不断点击触发；滚动加载
 */

// function throttle(fn, time) {
//   let timer = null;
//   let last;
//   return function (args) {
//     const that = this;
//     let now = Date.now()
//     if(last && now < time + last) { // 还没到时间
//       clearTimeout(timer)
//       console.log('clear ===>');
//       timer = setTimeout(() => {
//         last = now
//         fn(that, args)
//       }, time);
//     } else { // 到了时间，执行函数
//       console.log('time done ===>');
//       last = now
//       fn(that, args)
//     }
//   };
// }

// 每间隔多少时间触发一次：比如滚动事件
function throttle2(fn, time) {
  let before = 0
  let timer = null // 为了最后一次触发
  return function(...args) {
    const that = this
    let after = Date.now()
    if(after-before >= time) { // 执行一次
      before = after
      fn.call(that,...args)
      console.log('触发了');
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        before = after
        fn.call(that,...args)
        console.log('我应该是最后一次触发了');
      }, time);
    }
  }
}