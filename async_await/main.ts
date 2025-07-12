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
//