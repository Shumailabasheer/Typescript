// class User {
//     email: string ='a@gmail.com';
//     password:number =1234;
// constructor(e:string ,p:number){
//  this.email =e
//  this .password =p
//  console.log(this)
// }
// }

// const User1 = new User('a@gmail.com', 1234);
// const User2 = new User('a2@gmail.com' ,1234);
// const User3 = new User('a3@gmail.com' ,1234);

// console.log(User1);
// console.log(User2);
// console.log(User3);
// //.....this example............//
// let myObj ={
//     name:'Ali',
// myobj.printObjproperties(){
//         console.log(this.name);
//     }
// }; 
//..........parent & child class.......//
class Parent{
    email: string ='shumaila@gmail.com';
    password:number =4567;
    constructor(e:string,p:number){
        this.email =e;
        this.password =p;
    }
}
class Child extends Parent{
    role:string;
    constructor(r:string){
      super('shumail@gmail.com',4567);
    this.role = r
    }
}
const child1 = new Child('Admin');
console.log(child1);