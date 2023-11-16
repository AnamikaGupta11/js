let myDate = new Date()
console.log(myDate)
// Fri Nov 03 2023 12:12:13 GMT+0530 (India Standard Time)

console.log(myDate.toDateString())
// Fri Nov 03 2023
 
console.log(myDate.toLocaleString())
// 03/11/2023, 12:12:13
 
console.log(typeof myDate);
// object
 
let myNewDate1 = new Date(2023,10,3)
console.log(myNewDate1)
// Fri Nov 03 2023 00:00:00 GMT+0530 (India Standard Time)

let myNewDate2 = new Date(2023,10,3,5,8,87)
console.log(myNewDate2.toLocaleString())
// 03/11/2023, 05:09:27
undefined
let myNewDate3 = new Date("2023-11-3")
console.log(myNewDate3.toLocaleString())
// 03/11/2023, 00:00:00

let myNewDate4 = new Date("01-14-2013")
console.log(myNewDate4.toLocaleString())
// 14/01/2013, 00:00:00

console.log(Date.now())
// 1698994796936 (in miliseconds)

console.log(Math.floor(Date.now()/1000))
// 1698995029 (seconds)

let newDate = new Date()
console.log(newDate)
// Fri Nov 03 2023 12:36:08 GMT+0530 (India Standard Time)

console.log(newDate.getMonth());
// 10

console.log(newDate.getDay());
// 5

console.log(newDate.getDate())
// 3

newDate.toLocaleString('default',{weekday:"long"})
// 'Friday'
newDate.toLocaleString('default',{weekday:"long"}+1)
// '03/11/2023, 12:36:08'
