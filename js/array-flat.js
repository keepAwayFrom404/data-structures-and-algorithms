function myFlat(arr) {
  let result = []
  for(let it of arr) {
    if(Array.isArray(it)) result.push(...myFlat(it))
    else result.push(it)
  }
  return result
}

console.log(myFlat([[1,2],3,[1,[2]]]));