// parameter destructuring
// const person={
//     firstName:"snehal",
//     gender:"female"
// }
// function printDetails(obj){
//     console.log(obj.firstName);
// }
// printDetails(person);
// function print({firstName,gender,age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }
// print(person);
// callback function
// function myfunc(name){
//    console.log("my name is "+ name);
// }
// function myfunc2(callback){
//     console.log("you are passing another function as a input for the function");
//     callback("snehal");
// }
// myfunc2(myfunc);
// function myfunc(){
//      function hello(){
//         console.log("hello world");
//      }
//       console.log("you are studying function inside function");
//      return hello;
// }
// const ans = myfunc();
// ans();
// array methods
// const nums=[1,2,3,4,5];
// nums.forEach((number,index)=>{
//     console.log("number is"+ number+"index is"+ index);
// })
// const users=[
//     {firstName:"snehal", age:21},
//     {firstName:"shiya", age:20},
//     {firstName:"sheetal",age:23}
// ];

// console.log(users.map((obj)=>{
//     return obj.firstName;
//     }));
// const nums = [1,2,3,4,5];
// console.log(nums.map((number)=>{
//     return number*number;
// }));
// let num = [1,2,3,4,5,6];
// console.log(num.filter((number)=>{
//     return number%2!=0;
// }));
// const userCart = [
//     {Id:1,productName:"mobile",price:12000},
//     {Id:2,productName:"laptop",price:20000},
//     {Id:3,productName:"computer",price:32000},
//     {Id:4,productName:"grinder",price:42000}
//     ];
//    const solution = userCart.reduce((totalPrice , currentPrice )=>{
//           return totalPrice + currentPrice.price;
//     },0);
//     console.log(solution);
// const nums = [5,9,1200,400,3000];
// console.log(nums.sort((a,b)=>{
//     return a-b;
// }));
// const productz = [
//     {productId:1, productName:"p1",price:400},
//     {productId:2, productName:"p2",price:1400},
//     {productId:3, productName:"p3",price:100},
//     {productId:4, productName:"p4",price:880}
// ];
// console.log(productz.sort((a,b)=>{
//     return a.price-b.price;
// }))
// const array = ["doggy", "cats", "hatty", "vaining"];
// console.log(array.find((str)=>{
//     return str.length==3;
// }));
// const array = [1,2,3,4,6];
// console.log(array.some((a)=>{
//     return a%2==0;
// }))
// let array = [1,2,3,4,5,6];
// console.log(array.fill(-1));
// const myArray1 = [1,2,3,4,5,6];
// myArray1.splice(1,2,7,8);
// console.log(myArray1);
// for each map filter reduce sort find every some fill splice
// iterables are those where we can apply for of loop 
// const str = "abc";
// for(let char of str){
//     console.log(char);
// }
// const firstName = "harshit";
// for(let char of firstName){
//     console.log(char);
// }
// const numbers = new Set([1,2,2,3,4,5]);
// console.log(numbers);
// const myArray = [1,3,4,5,5,5,6,5];
// const mySet = new Set(myArray);
// console.log(mySet);
// const myMap = new Map();
// myMap.set("firstName","harshit");
// myMap.set("age", 21);
// console.log(myMap);
// console.log(myMap.get("firstName"));
// console.log(myMap.keys());
// for (let key of myMap.keys()){
//     console.log(key);
// }
// const obj1 = {
//     firstName : "snehal",
//     age: 21
// };
// const obj2 =obj1;
// const obj2 ={...obj1};
// obj2.gender ="female";
// if(obj1==obj2){
//     console.log("it is true");
// }
// else{
//     console.log("it is false");
// }
// methods
// const obj = {
//     firstName:"snehal",
//     age:23,
//     gender:"female",
//     about:function(){
//         console.log("person name is" + firstName+"and age is"+age );
//     }
// };
// const ans = obj.about;
// ans();
// const person2 = {
//     oneName:"snehal",
//     secondName:"bandi",
//     age:35,
//     about:function(){
//         console.log("your name is "+this.oneName+"and your age is "+this.age);
//     }
// };
// const ans = person2.about();
// console.log(ans);

// const person3 = {
//     firstName:"snehal",
//     age:21,
//     about: function(){
//         console.log("your name is "+ this.firstName+"and age is"+this.age);
//     }
// };
// person3.about();
// function personInfo(){
//     console.log("my name is "+ this.firstName);
// }
// const person1 = {
//     firstName:"snehal",
//     age:21,
//     about:personInfo
// }
// const person2 = {
//     firstName:"sneha",
//     age:21,
//     about:personInfo
// }
// const person3 = {
//     firstName:"nehal",
//     age:21,
//     about:personInfo
// }
// person1.about();
// person2.about();
// person3.about();
// console.log(this);
// function hello(){
//     console.log("hello world");
// }
// hello();
// hello.call();