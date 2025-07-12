"use strict";
//concatination
let FirstName = 'Shumaila';
let SecondName = 'Basheer';
console.log(FirstName + SecondName);
//Template Literal
let First_Name = 'Shumaila';
let Second_Name = 'Basheer';
console.log(`My name is ${First_Name} ${Second_Name}`);
function SymyName(name) {
    console.log(name);
}
SymyName('Ali');
SymyName('Ameen');
function Myname(name, age) {
    console.log(`my is ${name} and my age is ${age} `);
}
Myname('shumaila', 25);
function loginUserMessage(username) {
    return `${username} just logged in`;
}
console.log(loginUserMessage("shumaila"));
//Default parameters
function myBio(name = 'Bilal', age = 25) {
    console.log(`my name is ${name} and my age is`);
}
myBio();
function talk(message = 'Hi') {
    console.log(message);
}
talk();
function greet(name = 'world') {
    console.log(`Hello ${name}`);
}
greet();
