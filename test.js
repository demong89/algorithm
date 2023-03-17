
// function Foo() {
//   this[100] = 'test-100'
//   this[1] = 'test-1'
//   this["B"] = 'bar-B'
//   this[50] = 'test-50'
//   this[9] =  'test-9'
//   this[8] = 'test-8'
//   this[3] = 'test-3'
//   this[5] = 'test-5'
//   this["A"] = 'bar-A'
//   this["C"] = 'bar-C'
// }
// var bar = new Foo()


// for(key in bar){
//   console.log(`index:${key}  value:${bar[key]}`)
// }

// 快慢


function rev(num){
  let newNum = 0
  while(num){
    let s = num%10
    num  =  parseInt(num / 10)
    newNum = newNum*10 + s
  } 
  return newNum
}
console.log(rev(12340))