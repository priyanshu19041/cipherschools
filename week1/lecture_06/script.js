// var x=15;
// {
//     let x=5;  //let keyword used to declare the variable
//     console.log(x);

//     const y=6;
//     console.log(y);
//     // y=7;
//     // console.log(y); //it will show the error bcz const keyword cannot be updated
// }

// console.log(x);



// //  FUNCTION

// var x= function (x,y){
//     return x+y;
// };

// console.log(x(4,6));

// // ARROW FUNCTION
// const x=(x,y)=> {
//     return x+y;
// };
// console.log(x(5,8));


// // SPREAD OPERATOR
// const q1=["Jan", "Feb", "Mar"];
// const q2=["Apr", "May", "Jun"];
// const q3=["Jul", "Aug", "Sep"];
// const q4=["Oct", "Nov", "Dec"];

// const year= [...q1,...q2,...q3,...q4];
// console.log(year);

// const myNumber=[25,12,50,77,-1];
// let maxValue =Math.max(...myNumber);
// console.log(maxValue);

// // FOR LOOP
// const myNumber=[25,12,50,77,-1];
// let sum=0;
// for(let num of myNumber){
//     sum=sum+num;
// }
// console.log(sum);

// // MAP 
// const fruits = new Map([["apples",200],["bananas",100],["oranges",250]]);

// console.log(fruits);

// console.log(fruits.get("oranges"));

// // SETS 
// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("a");


// console.log(letters);  // it only print a and b once bcz it uses hasshing in order to not add the element which is already there

// // CLASS 
// class Car{
//     constructor(name,mfgYear){
//         this.name=name;
//         this.mfgYear=mfgYear;
//     }
// }

// const myCar1= new Car("Mercedes",2022);
// const myCar2= new Car("Porsche",2020);

// console.log(myCar1,myCar2);

// // PROMISE 
// const fun= ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("In side promise");
//             resolve();
//         },2000);
//     });
// }

// fun().then(()=>{
//     console.log("Resolve");
// }).catch(()=>{
//     console.log("Reject");
// })

// // OBJECT 
// const person={
//     firstname:"Priyanshu",
//     lastname:"Singh",
//     age:21,
//     eyecolor: "black",
// };
// let id= Symbol("id");
// person[id]=34321;
// console.log(person);

// //default value
// const addTwoNumber=(a,b=0)=>a+b;
// console.log(addTwoNumber(10));


// // rest operator
// const addNumbers =(...args)=>{
// 	let sum =0;
// 	for(let arg of args){
// 		sum += arg;
// 	}
// 	return sum;
// };
// console.log(addNumbers(1,2,3,4,5,6));