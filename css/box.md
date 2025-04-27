# 盒模型
介绍：指css世界中的元素都由一个个盒构成，从内到外content、padding、border、margin，由display属性定义盒子的类型，每个盒子有内外类型区分，常见的block（block-block）、inline（inline-inline） 

外部显示：外部显示类型决定了盒子之间的作用关系，比如外部inline直接不会自动换行，block之间会自动换行
指的是块级盒子，盒子的不同部分如何协同，行内盒子只使用盒模型的部分行为

- 标准盒模型：content-box,width仅设置content
- ie盒模型：border-box，width设置的是整个盒子的大小包含border和padding
## margin 边距
- 边距折叠仅发生在垂直方向
- 相邻兄弟
- 没有内容将父元素与后代元素分隔开
- 空的块

## border 边框
表现正常没啥问题

## padding 内边距
- 不能为负数

## 行内盒子
盒模型的大部分属性都适用于行内盒子,宽高不生效、垂直margin和border无作用效果