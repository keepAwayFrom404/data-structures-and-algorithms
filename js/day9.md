## 什么是闭包，优缺点是什么
当函数能够访问并操作其他词法作用域的变量，这个函数就是闭包；
优点：模块封装，减少全局变量污染
缺点：内存占用，因为闭包一直占用内存没有释放

常见的闭包：
```js
const myModule = (function() {
  let name = 'cadenli'
  function changeName(newName) {
    name = newName
  }
  function sayName() {
    console.log(name)
  }
  return {
    changeName,
    sayName
  }
})()
myModule.sayName()
myModule.changeName('lidan')
myModule.sayName()
```