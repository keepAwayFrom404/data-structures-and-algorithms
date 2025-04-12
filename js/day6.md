### babel的了解
babel是一个js代码编译打包器，主要作用是将es next的现代代码打包成兼容性更高的代码，比如语法转换等
- 语法转换：es6 -> es5
- 特性填充：polyfill
- 源码转换：jsx->js
原理：@babel/parser解析代码成ast；使用各种插件进行语法数转换；@babel/generator将转换后的ast生成新的代码

现代替代方案：
- swc：rust编写，速度更快
- esbuild：打包与转换
- typescript编译：直接ts转es5

### rest参数
es6的新特性，优化了argument能力，也叫剩余参数，可以很方便不定量参数传递；

### class
class是es6继承语法，是原型琏继承的语法糖