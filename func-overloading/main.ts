//.............Rest perameters.............//
// function total(...totalItem: number[])
// {
// let totalprice:number =0
// for(let i=0; i<totalItem.length; i++){
//     totalprice += totalItem[i]
// }
// console.log('TOTAL:', totalprice)
// }
// total(10,100,200,5000,4000)

// function greeting(...greet: string[]){
//     console.log(greet.join(''));
// }
// greeting('Hello' , 'Faizat' ,'you have 2000 rupy')

//...............Function Overloded.............//
function Add(a:number , b:number):number;
function Add(a:string , b:string):string;
function Add(a:any , b:any):any{
    return a+b
}
add(1,2)
console.log(add('4','6'));

// function sum(a:number , b:number):number;
// function sum(a:string , b:string):string;
// function sum(a:any , b:any):any{
//     return a + b
// }
// console.log(sum('Hello','World'));

//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific
function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: boolean, arg2: boolean): boolean;//option 3
//this is not part of the overload list, 
//so it has only three overloads
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));

function signIn(email:string , password:string):string;
function signIn(email:string):string

function signIn(email:any , password?:any):any{
    console.log(email , password);
}
