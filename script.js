// map creates a new array by performing some operation on
// each array element 
let arr = [45,23,21]

let a = arr.map( (value) => {
    console.log(value)
    return value
})
console.log(a)