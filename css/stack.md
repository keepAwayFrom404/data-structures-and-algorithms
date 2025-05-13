# 砌体布局
CSS的`columns`属性是一个强大的多列布局工具，可以将内容自动分割成类似报纸的多列排版。以下是核心知识点整理：

一、基础语法与属性
```css
.element {
  columns: <column-width> || <column-count>;
}
```
• 简写属性：同时控制`column-width`（列宽）和`column-count`（列数）

• 默认行为：若只指定列数（如`columns: 3`），列宽自动计算；若只指定列宽（如`columns: 200px`），列数自动计算


二、子属性详解
| 属性 | 作用 | 示例 | 备注 |
|------|------|------|------|
| `column-width` | 设置最小列宽 | `column-width: 150px` | 响应式布局常用 |
| `column-count` | 固定列数 | `column-count: 4` | 优先于列宽计算 |
| `column-gap` | 列间距 | `column-gap: 2em` | 默认`1em` |
| `column-rule` | 列分隔线 | `column-rule: 1px solid #ccc` | 不占空间 |
| `column-span` | 跨列显示 | `column-span: all` | 仅支持`none/all` |

三、实战技巧
1. 响应式布局  
```css
.text-columns {
  columns: 2; /* 移动端默认2列 */
}
@media (min-width: 768px) {
  .text-columns {
    columns: 3 200px; /* 桌面端3列，最小宽度200px */
  }
}
```

2. 瀑布流布局  
```css
.gallery {
  columns: 250px; /* 自动计算列数 */
  column-gap: 15px;
}
.gallery-item {
  break-inside: avoid; /* 防止内容被截断 */
}
```

3. 横向分组布局（需配合固定高度）  
```css
.list {
  height: 300px;
  column-width: 100vw; /* 每屏一组 */
  overflow-x: auto;
}
```

四、注意事项
• 兼容性：需加浏览器前缀（`-webkit-`, `-moz-`）

• 内容平衡：使用`column-fill: balance`可优化列高（需固定容器高度）

• 替代方案：复杂网格布局建议用CSS Grid

• 从上到下排列，需要动态加载的业务，新图片不一定在最底端（按列排序而不是水平排序）；动态加载重新计算高度，导致之前图片跳动


五、浏览器支持
| 浏览器 | 支持版本 |
|--------|----------|
| Chrome | 50+ |
| Firefox | 52+ |
| Safari | 9+ |
| Edge | 10+ |

完整规范参考：[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/columns)