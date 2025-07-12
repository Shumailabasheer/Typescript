//............Structural typing.............//
type BaLL ={
    daimeter: number;
}
type Bat ={
    daimeter: number;
};
let baLL : BaLL = {
     daimeter: 24
};
let bat : Bat = {
     daimeter : 12
};
baLL = bat ;
bat = baLL ;

//.........Fresh Object.......//
type salary = {
    name : string;
    salary : number;
}
type bonousandsalary ={
    name:string,
    bonous:number,
    salary :number,
}
let employee1 : salary ={
    name: 'waseem',
    salary:40000,
}
let employee2 : bonousandsalary ={
    name : 'awais',
    bonous:10000,
    salary: 40000
}
let employee3 :salary ={
    name:'Ali',
    salary: 40000,
}                           //.... stale Object..///
employee1 = employee3
employee1 = employee2


type student ={
    name: string;
    age: number;
}
type teacher ={
    name: string;
    age:number;
    experiouns:Number |string;
};
let student1: student={
    name:'Ali',
    age:20,
};
let teacher1: teacher={
    name:'Areeba',
    age:25,
    experiouns:'two year',
};
student1 = teacher1
//teacher1 = student1
