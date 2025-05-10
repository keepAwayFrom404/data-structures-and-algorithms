# grid布局
唯一的二维布局方式，flex是一纬布局
## 容器属性
- grid-template-columns：定义网格中的列
- grid-template-rows：定义网格中的行
- auto-fill: 尽可能多的展示在一行
- repeat() 函数：可以简化重复的值。该函数接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值
- fr：单位代表网格容器中可用空间的一等份，类似flex的flex-grow：1；
- minmax() 函数：我们有时候想给网格元素一个最小和最大的尺寸，minmax() 函数产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中
- auto 关键字：由浏览器决定长度。通过 auto 关键字，我们可以轻易实现三列或者两列布局
- grid-row-gap 属性、grid-column-gap 属性分别设置行间距和列间距。 grid-gap 属性是两者的简写形式。
- grid-template-areas 属性用于定义区域，一个区域由一个或者多个单元格组成(全局定义区域)
- grid-area 属性指定项目放在哪一个区域（定义项目所属区域）
- grid-auto-flow  属性控制着自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图英文数字的顺序 one,two,three...。这个顺序由
- justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格的垂直位置（上中下）。单元格水平垂直的对齐方向,默认都是stretch铺满，相当于居中了。
- justify-content 属性是整个内容区域在容器里面的水平位置（左中右），align-content 属性是整个内容区域的垂直位置（上中下）。它们都有如下的属性值。表示的是整个内容
- 隐式和显示网格：显式网格包含了你在 grid-template-columns 和 grid-template-rows 属性中定义的行和列。如果你在网格定义之外又放了一些东西，或者因为内容的数量而需要的更多网格轨道的时候，网格将会在隐式网格中创建行和列;假如有多余的网格（也就是上面提到的隐式网格），那么它的行高和列宽可以根据 grid-auto-columns 属性和 grid-auto-rows 属性设置。它们的写法和 grid-template-columns 和 grid-template-rows 完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高

## 项目属性
- 可以指定网格项目所在的四个边框，分别定位在哪根网格线，从而指定项目的位置
grid-column-start 属性：左边框所在的垂直网格线

grid-column-end 属性：右边框所在的垂直网格线

grid-row-start 属性：上边框所在的水平网格线

grid-row-end 属性：下边框所在的水平网格线

- justify-self 属性设置单元格内容的水平位置（左中右），跟 justify-items 属性的用法完全一致，但只作用于单个项目
align-self 属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目