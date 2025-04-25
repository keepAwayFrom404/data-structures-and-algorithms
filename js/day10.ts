// case语句在匹配到第一个之后，没有break的情况下，后面的语句没匹配也会执行
let a = 10

switch (a) {
  case 10:
    console.log(3);
  case 1:
    console.log(1);
  case 2:
    console.log('2');
  default:
    console.log('default');
  
    // break
  case 4:
    console.log(4);
}