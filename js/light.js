async function delay(sec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, sec);
  })
}


let first = true
const dom = document.getElementById('light')
console.log(dom, 'dome');
let now = Date.now()
async function bar() {
  await delay(3000)
  let temp = Date.now() - now
  console.log(temp, '3s done');
  now = Date.now()
  dom.style.background = 'yellow'
  await delay(1000)
  temp = Date.now() - now
  console.log(temp, '1s done');
  now = Date.now()
  dom.style.background = 'red'
  await delay(2000)
  temp = Date.now() - now
  console.log(temp, '2s done');
  now = Date.now()
  console.log('2s done');
  dom.style.background = 'green'
}
bar()
setInterval(bar, 6000);

