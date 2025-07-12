let tuple :[string,number,string,boolean]=['hello',123,'coffe',true]
//console.log(tuple);
//.......You can also access elements in a similar concise way:
console.log(tuple[0]);
console.log(tuple[1]);
console.log(tuple[2]);

///.....if you want to define and initialize a tuple inline within a function return statement:
function getpersonInfo():[string,number,string,boolean]{
    return ['shumaila',45,'coder', true]
}
let personInfo = getpersonInfo()
console.log(personInfo);

