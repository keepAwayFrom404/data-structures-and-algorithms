/** 
 * 2. 写一个方法去掉字符串中的空格
 */
function removeWhiteSpace(str: string, type: 'pre'|'preAndAfter'|'after'|'center' = 'pre') {
  switch (type) {
    case 'pre':
      return str.replace(/^\s*/g,'')
    case 'preAndAfter':
      return str.replace(/^\s*|\s*$/g,'')
    case 'after':
      return str.replace(/\s*$/g,'')
    case 'center':
      const left = str.match(/^\s*/g)?.[0]
      const right = str.match(/\s*$/g)?.[0]
      const center = str.replace(/\s+/g,'')
      return left+center+right
    default:
      break;
  }
}
console.log(removeWhiteSpace('   12 3   ','center'), '====>');
