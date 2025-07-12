"use strict";
let tuple = ['hello', 123, 'coffe', true];
//console.log(tuple);
//.......You can also access elements in a similar concise way:
console.log(tuple[0]);
console.log(tuple[1]);
console.log(tuple[2]);
///.....if you want to define and initialize a tuple inline within a function return statement:
function getpersonInfo() {
    return ['shumaila', 45, 'coder', true];
}
let personInfo = getpersonInfo();
console.log(personInfo);
// function getPersonInfo(): [string, number, boolean] {
//     return ["Alice", 30, true];
// }
// let personInfo = getPersonInfo();
// console.log(personInfo);  
