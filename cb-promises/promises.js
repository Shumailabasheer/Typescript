"use strict";
//.............Promises.........//
// let promise = new Promise((resolve ,reject) =>{}) 
// console.log(Promise)
Object.defineProperty(exports, "__esModule", { value: true });
function loginUserWithPromise(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'shumaila@email.com') {
                resolve('Logged in Successfully!');
            }
            else {
                reject('Incorrect Email or password');
            }
        }, 2000);
    });
}
;
let getUserVideosWithPromises = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'shumaila@email.com') {
                resolve(['video1', 'video2', 'video3']);
            }
            else {
                reject('Incorrect Email');
            }
        }, 3000);
    });
};
loginUserWithPromise('shumaila@email.com', 3456).
    then((email) => {
    console.log('Loggedin successfully');
    return getUserVideosWithPromises(email)
        .then((videos) => console.log(videos));
}).catch((error) => console.log(error));
