const myModule = {
  name: 'cadenli',
  age: 28,
  sayMyInfo() {
    return `${this.name}:${this.age}`
  }
}

const myModule2 = (function(){
  const name = 'cadenli'
  const age = 28
  function say() {
    return `${name}:${age}`
  }
  return {
    say
  }

})()
console.log(myModule2.say());

// console.log(myModule.sayMyInfo());