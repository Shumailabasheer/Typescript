"use strict";
//Object
// let userName ='Shumaila'
// let userDesignation = 'student'
// let userResidence = 'karachi'
let userObject = {
    name: 'shumaila',
    designation: 'student',
    Residence: 'karachi',
};
//console.log(userObject.name, userObject.Residence, userObject.designation)
//console.log(userObject['name'])
// console.log(`username is ${userObject.name} designation is ${userObject.designation} and Resignation is
// ${userObject.Residence}`)
// Nested object
let UserID = {
    email: 'some@gmail.com',
    fullName: {
        firstName: 'shumaila',
        lastName: 'Basheer'
    }
};
console.log(`My first and last name is ${'shumaila basheer'} and My email id is ${UserID.email}`);
let studentID = {
    name: 'Waseem Awan',
    fatherName: 'basheer',
    IDNumber: '345',
    class: 12,
    Adrees: {
        street: 5,
        city: 'karachi'
    }
};
console.log(studentID.name, studentID.fatherName, studentID['IDNumber'], studentID.class);
//console.log(studentID.Adrees)
console.log(studentID['Adrees'], ['street'], ['city']);
