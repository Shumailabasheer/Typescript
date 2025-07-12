//concatination
let FirstName:string='Shumaila'
let SecondName:string='Basheer'
console.log(FirstName + SecondName)

//Template Literal
let First_Name:string ='Shumaila'
let Second_Name:string = 'Basheer'
console.log(`My name is ${First_Name} ${Second_Name}` )

function SymyName(name:string){    
    console.log(name)
}
SymyName('Ali')
SymyName('Ameen')

function Myname(name:string ,age: number){
    console.log(`my is ${name} and my age is ${age} `)
}
Myname('shumaila' ,25)


function loginUserMessage(username:string){
    return `${username} just logged in`
  }
  console.log(loginUserMessage("shumaila"))

//Default parameters
function myBio(name:string = 'Bilal' ,age:number =25){
    console.log(`my name is ${name} and my age is`)
} 
myBio()


function talk( message:string = 'Hi'){
       console.log(message)
}
talk();
function greet( name = 'world'){
      console.log(`Hello ${name}`)
}
greet();