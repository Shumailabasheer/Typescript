"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let baLL = {
    daimeter: 24
};
let bat = {
    daimeter: 12
};
baLL = bat;
bat = baLL;
let employee1 = {
    name: 'waseem',
    salary: 40000,
};
let employee2 = {
    name: 'awais',
    bonous: 10000,
    salary: 40000
};
let employee3 = {
    name: 'Ali',
    salary: 40000,
}; //.... stale Object..///
employee1 = employee3;
employee1 = employee2;
let student1 = {
    name: 'Ali',
    age: 20,
};
let teacher1 = {
    name: 'Areeba',
    age: 25,
    experiouns: 'two year',
};
student1 = teacher1;
//teacher1 = student1
