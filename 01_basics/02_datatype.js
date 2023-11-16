console.log("Hello, Dcoder!")


//Primitive - stack
//Reference - heap

// Primitive
// 7 types : String, Number,null, undefined, boolean 
//           symbol, bigInt

// Reference (Non Primitive)
// Array , objects , function

const id = Symbol('123')
const aid = Symbol ('123')
console.log(id)
console.log(aid)
console.log(id==aid)
const bigNumber = 6262526277387228726262n //BigInt
console.log(typeof bigNumber)
const arr = ["abc","xyz","efg","klm"]; //array
let myObj= {//object
  name:"Anamika",
  age:21,
}

//function(){} //function 

//for example:
const myfunction = function(){
  console.log("Anamika")
}
myfunction()
console.log(typeof arr)
