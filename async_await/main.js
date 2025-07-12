"use strict";
//...........Async_await.......//
// function data(){
//     return new Promise((resolve, reject) => {
//         reject('Rejected')
//     })
// };
// async function ferchData() {
//     try{
//         const userdata = await data()
//         console.log(userdata);
//     }catch(error){
//      console.log(error);
//     }
// };  
// function ferchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout (() =>{
//             resolve({data: 'raw data'})
//         }, 1000);
//     });
// }
// function processData(data:any){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`processd ${data.data}`)
//         }, 1000);
//     })
// }
// function saveData(data:any){
//        return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve(`save ${data}`)
//         }, 2000);
//        })
// }
// fetchData()
// .then((data) =>{
//     return processData(data);
// })
// .then((processdData) =>{
//     return saveData(processdData);
// })
// .then((result) =>{
//     console.log(result);
// })
// .catch((error) =>{
//       console.log("Error:",error);
// });
//async await func
// async function handleData(){
//     try{
//         const data = await ferchData();
//         const processdData = await processData(data);
//         const result =await saveData(processdData);
//         console.log(result);
//     } catch(error){
//       console.log('Error:',error);
//     }
// };
// enum Fruit {
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
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 8);
console.log(numbers);
