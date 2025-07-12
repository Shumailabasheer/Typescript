

//Enums
enum Roles{
    admin = 'admin',
    normalUser ='normalUser',
}
type loginDetails ={
    UserName:string,
    Password:string,
    emaila:string,
    role: Roles
}
let user1: loginDetails ={
    UserName:'shumaila',
    Password:'1234',
    emaila:'shumai@gmail.com',
    role: Roles.normalUser
       //normalUser  
}
console.log(user1);
let user2: loginDetails ={
    UserName:'waseem',
    Password:'0987',
    emaila:'waseem@gmail.com',
    role: Roles.admin
       //admin
}

enum color{
 Orange = 12,
 Red = 'Red',
 Blue = 'Blue',
 Black = 'Black'
}
        //  MENU CARD
enum MENU {
    TIKKA = 'TIKKA',
    BEEFROLL ='BEEFROLL',
    MALAIBOTI ='MALAIBOTI',
    BBQSTICKS ='BBQSTICKS',
    TillNaaN ='TillNaaN',
}
enum PAYMENTS {
    TIKKA = 400,
    BEEFROLL =200,
    MALAIBOTI = 500,
    BBQSTICKS =800,
    TillNaaN =100,
}
enum REVIEWS {
    BAD = 'BAD',
    GOOD ='GOOD',
    DELICIOUS ='DELICOUS',
}
type order ={
    order: MENU[];
    payment: Number[];
    review: REVIEWS; 
};
let pleaseOrder:order ={
    order: [MENU.BBQSTICKS ,MENU.BEEFROLL, MENU.TillNaaN],
    payment:[800+200+100],
    review: REVIEWS.DELICIOUS
};
console.log(pleaseOrder);
//..................ANY & UNKNOWN...................//
let myfavrNum:any =12;
myfavrNum = 'awan';
//                    UNKNOWN
let myName:any = 'shumaila';
console.log(myName.toUpperCase());
 let age: unknown = 25;                     //not work
// console.log(age.toFixd());
if (typeof(age) === 'number' ){             //.....type Narrowing...//
    console.log(age * 2);
}else {
    console.log('Incorrect data');
};

let Name: unknown = 'shumaila';
if(typeof(Name) === 'string'){
   console.log(Name.toUpperCase());
}else if(typeof(Name) === 'number'){
    console.log( Name.toFixed(2));
}

//enum Fruit {
    //     Apple,
    //     Banana,
    //     Cherry = 3,
    //     Date
    //   }
    //   console.log(Fruit.Date);
    //   enum Days {
    //     Monday = 1,
    //     Tuesday,
    //     Wednesday,
    //     Thursday,
    //     Friday,
    //     Saturday,
    //     Sunday
    //   }
    //   console.log(Days)
    //   let numbers: number[] = [1, 2, 3, 4, 5];
    //   numbers.splice(2, 1,8);
    //   console.log(numbers);
    
    

//................Explicit Casting............//
// console.log(Name as string.toUpperCase())