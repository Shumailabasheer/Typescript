
// // Hoisting
// console.log(a);
// var a ='Bilal'
// console.log(b);
// var b = 10
                                 // Global scope
// var name1 = 'waseem'
// let name2 = 'shumaila'
// const name3 = 'fatima'

                             // block scope
                            
if(true){
    var name1 = 'waseem'
    let name2 = 'shumaila'
    // const name3 = 'fatima'
    console.log(name2)
}

console.log(name1)
// console.log(name2)
// console.log(name3)

let a =10
var b =200
const c =300

if(true){
    let a =400
    var b=50
    const c =60
    console.log('INNER' , a)
    console.log('INNER' , c)
}
console.log(a)
console.log(b)
console.log(c)
console.log(b)