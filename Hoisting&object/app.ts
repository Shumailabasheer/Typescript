     //Object
// let userName ='Shumaila'
// let userDesignation = 'student'
// let userResidence = 'karachi'

let user_Object ={
    name : 'shumaila',
    designation: 'student',
  Residence : 'karachi',
}
  console.log(user_Object.name, user_Object.Residence, user_Object.designation); //different type of console
 //console.log(user_Object['name']);
(`username is ${user_Object.name} designation is ${user_Object.designation} and Resignation is
${user_Object.Residence}`)

                        // Nested object
let UserID ={ 
    email : 'some@gmail.com',
    fullName: {
        firstName : 'shumaila',
        lastName: 'Basheer'
    }
    
}
console.log(`My first and last name is ${'shumaila basheer'} and My email id is ${UserID.email}`)

let studentID = {
    name: 'Waseem Awan',
    fatherName: 'basheer',
    IDNumber: '345',
    class: 12,
    Adrees: {
       street : 5,
       city : 'karachi'
    }
}
console.log(studentID.name ,studentID.fatherName,studentID['IDNumber'],studentID.class)//different types of console
console.log(studentID.Adrees)
//console.log(studentID['Adrees'],['street'],['city'])  
//console.log(studentID.Adrees.city ,studentID.Adrees.street)

               //object

let teacherobj:{
     name: string,
      age:number,
      expertDeveloper: boolean,
    qualities: {
        haircolor: string,
        height: number,
      }
} ={
     name: 'Areeba',
     age:20,
     expertDeveloper: true,
     qualities:{   //nested oblect
        haircolor:'back',
        height :5.2,
     }
}
                                 //type aliase

type studentObjectType = {
  name: string,
      age:number,
      expertDeveloper: boolean,
    qualities: {
        haircolor: string,
        height: number,
      }
}
let studentObject: studentObjectType ={
  name: 'Hafsa',
  age:20,
  expertDeveloper: true,
  qualities:{                     
     haircolor:'black',
     height :5.2,

  }
}
                      //Anonymouse
let techer :{name: string , exp: number} ={
  name:'Ali',
  exp:10,
}
                                    //union literals
let userInput: number|string|Number|Boolean
userInput = 'Xyz';
userInput =1234;
userInput = true

let age: Number|string
age =13;
age ='thirteen'

let Name : string|number 
Name = 'Hafsa134'



                                        //Type Literals
let Traffic_light : 'red'|'green'|'yellow'
Traffic_light = 'red'
//  Traffic_light = 'blue'  show error becouse blue color not deffine

                                             // Intersection
type person ={
  name:string
  age :number
}   
type Employe ={
  emp_id:number
  department:string
}       
type EmployeDetail = person & Employe         

let Employe:EmployeDetail ={
  name: 'Waseem awan',
  age:2,
  emp_id:456,
department:'IT'    
}                  

                                        






