###  谈谈你对es6的module体系的理解 
模块是通用功能集合的代码块，封装了一些内部逻辑并对外暴露一些方法，在js中，最初使用对象创建模块
```js
const myModule = {
  name: 'cadenli',
  age: 28,
  sayMyInfo() {
    return `${name}:${age}`
  }
}
```
为了防止全局污染隐藏私有属性和方法，引入了IIFE，

```js
(function(){
  const name = 'cadenli'
  const age = 28
  function say() {
    return `${name}:${age}`
  }
  return say
})()
```

为了减少全局变量污染，node引入了commonjs模块化方案，使用export或者module.export导出，使用require导入

后续在浏览器中也引入了cmd模块化方案，就近引用模块

在往后引入了amd方案，按需引用

在往后es6引入了原生支持的module方案，使用import导入，export default导出，从此前端有了标准的模块化方案