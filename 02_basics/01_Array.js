// const myArr = [2,4,6,8,9]
// const myArr1 = ["anamika","bitto"]
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])

// // Array methods
// myArr.push(6)   // to add an element at last
// console.log(myArr)
// myArr.pop()    // to remove last element
// console.log(myArr)
// myArr.unshift(8)  //to add an element at starting index '0'
// console.log(myArr)
// myArr.shift()  //to remove element from first starting index
// console.log(myArr)

// console.log(myArr.includes(0)) 
// console.log(myArr.includes(6))
// console.log(myArr.indexOf(4))
// console.log(myArr.indexOf(14)) 

// const newArr = myArr.join()  // join() is used to convert a array to string by combine all elements
// console.log(myArr)
// console.log(newArr)
// console.log(typeof myArr)
// console.log(typeof newArr)

// const slice1 = myArr.slice(1,3)   // returns the slice from real array
// console.log(slice1)
// console.log(myArr)

// const slice2 = myArr.splice(1,3)  // also remove the slice from real array
// console.log(slice2)
// console.log(myArr)

const arr1 = [1,3,5,2,6,70]
const arr2 = [ 'a','b',1]
// arr1.push(arr2)
console.log(arr1)
 
const newArr = arr1.concat(arr2)
console.log(newArr)

const newArr2 = [...arr1,...arr2]
console.log(newArr2)

const array = [3,5,7,[4,7,6],8,[9,[11,12],0]]
const newArr3 = array.flat(Infinity)
console.log(newArr3);


console.log(Array.isArray("Anamika"))
console.log(Array.from("Anamika "))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

