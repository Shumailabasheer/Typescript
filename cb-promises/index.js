"use strict";
// //.....Synchronous....//
// console.log(1);
// console.log(2);   //sequencce wise print ho ga
// console.log(3);
// console.log(4);
// //......Asynchronous......//
// function message(){
//     console.log('Hello Shumaila')
// };
// setTimeout(message, 4000)//1000ms =1s ..//isy web API kehty hai
// //...........Callback Function........//
// function func1(Callback:() => void){
//      Callback();
// };
// function Callbackfunc(){
//     console.log('this is a Callback function' )
// };
// func1(Callbackfunc);
function loginUserwithCallback(email, password, cb) {
    setTimeout(() => {
        cb(email);
    }, 4000);
}
;
loginUserwithCallback('shumaila@emial.com', 1234, (email) => {
    console.log('User logedIn', email);
});
