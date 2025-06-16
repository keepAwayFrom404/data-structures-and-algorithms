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

function throttle(fn, time) {
  let timer = null;
  let last;
  return function (args) {
    const that = this;
    let now = Date.now()
    if(last && now < time + last) { // 还没到时间
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn(that, args)
      }, time);
    } else { // 到了时间，执行函数
      last = now
      fn(that, args)
    }
  };
}
