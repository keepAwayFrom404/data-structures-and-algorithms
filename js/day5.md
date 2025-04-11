###  谈谈你对es6的module体系的理解 
1、模块是通用功能集合的代码块，封装了一些内部逻辑并对外暴露一些方法，在js中，最初使用对象创建模块
```js
const myModule = {
  name: 'cadenli',
  age: 28,
  sayMyInfo() {
    return `${name}:${age}`
  }
}
```
2、为了防止全局污染隐藏私有属性和方法，引入了IIFE，

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
2009年，js进入服务端开发，继续模块化方案，node引入了commonjs模块化标准，使用export或者module.export导出，使用require导入；同步加载在浏览器中会导致阻塞
- 同步加载
- 语法简单
- 值拷贝

为解决浏览器问题amd异步模块加载方案被提出，由requirejs实现（define、require）
- 异步加载
- 依赖前置：需要使用必须定义时声明
- 浏览器优先

cmd，优化amd的问题
- 就近依赖
- 延迟执行：使用时才执行
- 写起来类似commonjs


在往后es6引入了js语言级别的module方案，使用import导入，export default导出，从此前端有了标准的模块化方案
- 静态结构：依赖关系在编译时确定
- 实时绑定，导出引用
- 默认严格模式
- 异步加载