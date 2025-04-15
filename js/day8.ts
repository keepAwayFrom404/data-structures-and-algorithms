// 数组去重
function flatArr(arr) {
  return Array.from(new Set(arr.map(it => JSON.stringify(it)))).map((it: string) => JSON.parse(it))
}

console.log(flatArr([1,1,2,3,4,43,3,[1],[1,2],[1]]));
