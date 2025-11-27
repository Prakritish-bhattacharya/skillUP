// map creates a new array by performing some operation on
// each array element 
// let arr = [45,23,21]

// let a = arr.map( (value) => {
//     console.log(value)
//     return value
// })
// console.log(a)
let arr2 = [45,34,52,1,9,5]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)