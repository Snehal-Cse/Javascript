// synchronous and asynchronous programming
// javascript is synchronous programming and it is single threaded
// console.log("script start");
// setTimeout(()=>{
//     console.log("this gonna delay");
// },1000);
// console.log("script end");
// Javascript has callstack and callqueue 

// console.log("script start");
// setTimeout(()=>{
//     console.log("inside set Timeout");
// },0);
// for(let i=0;i<100;i++){
//     console.log("....");
// }
// console.log("script end");

// console.log("script start");
// const id = setTimeout(()=>{
//     console.log("hey its okay");
// },0);
// for(let i=0;i<100;i++){
//     console.log("........");
// }
// console.log(id);
// clearTimeout(id);
// console.log("script end");

// console.log("script start");
// setInterval(()=>{
//     console.log((Math.random()));
// },1000);
// console.log("script end");

// call back function in synchronous programming

// function myfunc(callback){
//     console.log("function is doing task 1");
//     callback();
// }
// myfunc(()=>{
//     console.log("function is doing task 2");
// })

// another example 

// function getTwoNum(number1,number2,callback){
//     console.log(number1,number2);
//     callback(number1,number2);
// }
// function addTwoNum(num1 ,num2){
//     console.log(num1+num2);
// }
// getTwoNum(4,5,addTwoNum);

//  another example

// function getTwoNumber(num1,num2,success,failure){
//     if(typeof num1==="number" && typeof num2 ==="number"){
//         success(num1,num2);
//     }
//     else{
//         failure();
//     }
// }
// getTwoNumber("4",5,(num1,num2)=>{
//     console.log(num1+num2);
// },()=>{
//     console.log("this will not happen");
// })

// callback in asynchronous javascript 

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(()=>{
//     heading1.textContent="Namaste";
//     heading1.style.color="blue";
//     setTimeout(()=>{
//         heading2.textContent="good morning";
//         heading2.style.color="green";
//     },1000)
// },1000);

// callback hell --> nested callback --> pyramid of doom

// intro to promises

//  const bucket = ["rice", "veggies","salt","chips"];
//  const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("veggies")&& bucket.includes("rice") && bucket.includes("salt")){
//         resolve("fried rice"); 
//     }
//     else{
//         reject("not available");
//     }
    
//  })
// friedRicePromise.then((biryani)=>{
//     console.log("lets eat",biryani);
// },(error)=>{
//   console.log(error);
// })

// another example

// const bucket = ["rice","chips","veggies","salt"];
// const friedRicePromise = new Promise((resolve,reject)=>{
// if(bucket.includes("veggies")&& bucket.includes("rice")&& bucket.includes("salt")){
//     resolve("biryani is ready");
// }
// else{
//     reject("not available");
// }
// })
// friedRicePromise.then((pulaav)=>{
//     console.log(pulaav);
// }
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// )
// promise is a feature of browser
// setTimeout and promise is a feature of browser and it gets stored in microstack queue

// function returning promise 

// function ricePromise(){
//     const bucket = ["coffee"];
//     return new Promise
// remaining promise same
// }

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value=true;
// setTimeout(()=>{
//     if(value){
        //             resolve();
        //         }
        //         else{
        //             reject();
        //         }
        //     },2000)
//        
// }
// myPromise().then(()=>{console.log("resolved")}).catch(()=>{console.log("rejected")});

// Promise.resolve and Promise.chaining

//  then-->always returns a promise

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeText(element, text,color,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text;
//                 element.style.color=color;
//                 resolve();
//             }
//             else{
    // console.log("its wrong");
//                 reject();
//             }
            
//         })
//     })
// }

// changeText(heading1,"namaste","blue", 20000).then(()=>{
//     return changeText(heading2,"hey","yellow", 20000);
// }).then(()=>{
//     return changeText(heading3,"hello","pink", 20000);
// }).then(()=>{
//     return changeText(heading4,"haanji","green", 20000);
// }).catch((error)=>{
//     alert(error);
// })

//  AJAX == asynchronous javascript and XML 

// HTTP request




