"use strict";
// let arry =[1, 'Ali', 'true']
// ///length of array is 3
// /// Indexing of max value is 2
// console.log(arry.length);
// // console.log(arry[1] = 'Bilal')
// console.log(arry[0] = 'areeba','hfsa','rimsha')
// let student =[{
//     name: 'Waseem',                                         //indexing 0
//     age: 20,
//     isDeveloper: false
// },
// {
//     name: 'Ali',
//     age: 25,                                                     //indexing 1
//     isDeveloper: true
// },
// ]
//  console.log(student[1].name,student[1].isDeveloper,student[1].age)
// Array methodes
//     push methodes
// let fruits:string[] = ['apple','banana','orange','grapes','cherry']
//  fruits.push('mango')
// console.log(fruits);
//pop metthodes
// let Fruits:string[] = ['apple','banana','orange','grapes','cherry']
// let dropitem = Fruits.pop()
// // Fruits.unshift('mango')
// let dropitem =Fruits.shift()
// console.log(Fruits);
// console.log(dropitem);
// slice methode
let FRUITS = ['apple', 'banana', 'orange', 'grapes', 'cherry'];
let sliceitem = FRUITS.slice(0, 4);
console.log(sliceitem);
//splice
// FRUITS.splice(2,4 ,'mango','kiwi')
// console.log(FRUITS);
//let FRUITS: (string | number | boolean)[] = [ true , 5 ,'hello']
let personInfo = [123, 'Ali', true];
let [Name, rollno, onside] = personInfo;
console.log('Name:', Name, 'Rollno:', rollno, 'onside:', onside);
