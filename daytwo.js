// primitive vs reference type
// explain reference type
let a1=["mango","apple","bannana"];
let a2=a1;
console.log(a1);
console.log(a2);
a1[1]="grapes";
console.log(a1);
console.log(a2);
// in primitive it makes the copy where as in reference it shares the same address
// how to clone array
// this is a way to clone array
let arr1=["item1", "item2"];
let arr2=arr1;
console.log(arr2===arr1);
// this method will give seperate array
let array1 = ["item1", "item2", "item3"];
let array2=array1.slice(0);
console.log(array2===array1);
// [].concat(array1); -->this is another way to concatenate the array
// let array2=[...array1];
let ar1=["item1","item2","item3"];
let ar2=[...ar1,"item4","item5"];
console.log(ar1);
console.log(ar2);
// for loop in array
console.log("new concept");
let fruits =["apple","mango","grapes"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
let fruit2=[];
for(let i=0;i<fruits.length;i++){
fruit2.push(fruits[i].toUpperCase());
}
for(let i=0;i<fruit2.length;i++){
    console.log(fruit2[i]);
}
// use const for creating array we can push or pop elements in array even if have defined it using const
// u can push multiple items in an array at one time
//  use for of loop to iterate in an array
console.log("for of ");
let item =["chair","bottle","pen"];
for( let i of item){
    console.log(i.toUpperCase());
}
// for in loop 
for(let j in item){
    console.log(item[j]);
}
// mostly use for of and for loop to iterate an array
// array destructuring
const c1=["snehal","shikha","shiya"];
let[var1,var2]=c1;
console.log(var1);
console.log(var2);
console.log(typeof c1);
// array is type of object
// objects
// objects if also reference type
const person={name: "harshit", age:22};
console.log(person.name);
console.log(person.age);
console.log(person);
// in array we use square brackets and in objects we use curly brackets
const obj ={name:"snehal",age:21,
hobbies:["eating","sleeping"]
};
console.log(obj.hobbies);
console.log(obj.hobbies[1]);
for(let i of obj.hobbies){
    console.log(i.toUpperCase());
}
obj.gender="female";
console.log(obj);
//we can also use square bracket notation 
console.log(obj["gender"]);
// difference between dot and bracket notation
const key ="email";
const obj2={
    name:"snehal",
    age:21,
    "person hobbies":["eating","sleeping"]
};
obj2[key]="snehal@gmail.com";
console.log(obj2);
// first difference is that of space and second is the key one
// how to iterate an object
console.log("iteration");
for(let i in obj2){
    console.log(i,obj2[i]);
}
// computed properties
 const key1 = "objkey1";
 const key2 = "objkey2";
 const value1 = "myvalue1";
 const value2 = "myvalue2";
 const obj4={
    [key1]:value1,
    [key2]:value2
 };
 console.log(obj4);
//  spread operator
const obj5 = {
    key1:"snehal",
    key2:"bandi"
}
const obj6={
    key3 :"shikha",
    key4:"mehta"
}
const newObj ={...obj5,...obj6,key5:"shiya"};
console.log(newObj);
// one more fact about spread operator
const str = [..."abc"];
console.log(str);
const str1={
   ...["item1", "item2"]
};
console.log(str1);
const str2 = {
    ..."abcdefghijklmnopqrstuvwxyz"
}
console.log(str2);
// object destructuring 
const band ={
    bandName:"one direction",
    famousSong:"steal my girl",
    year:2000
};
const{bandName,famousSong,year}=band;
console.log(bandName);
console.log(famousSong);
console.log(year);
// object inside an array
const users = [
    {firstname:"snehal",age:21},
    {firstname:"saroj",age:45},
    {firstname:"sushil",age:50}
];
console.log(users);
for(let n of users){
    console.log(n.firstname);
}
// nested destructuring
const user2 = [
    {firstname:"snehal",age:21},
    {firstname:"saroj",age:45},
    {firstname:"sushil",age:50}
];
const [userA, userB, userC]=user2;
console.log(userA);
console.log(userA.firstname);
const[{firstname},,{age}]=user2;
console.log(firstname);
console.log(age);
// functions
// function singBirthDaySong(){
//     console.log("happy birthday");
// }
// function twoPlusFour(){
//     console.log(2+4);
// }
// twoPlusFour();
// function sum(number1,number2){
//     return +number1+ +number2;
// }
// let num1=prompt("enter the number 1");
// let num2=prompt("enter the number 2");
// let ans = sum(num1,num2);
// console.log("the answer is"+" "+ans);
// make a function of even and odd
// function isEven(num1){
//     if(num1%2==0){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// let answer=+prompt("enter a number");
// isEven(answer);
// make a function where it will take input of string and it will give output its first character
// let str5 = prompt("enter a string");
// function first(str){
//     return str[0].toUpperCase();
// }
// console.log(first(str5));
// take input of an array and target and return the index of the target
function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [3,4,5,6,7];
let target=8;
console.log(findTarget(myArray,target));
// function expression
// function expression is different from function declaration
const singBhajan = function(){
    console.log("hare radha hare krishna");
}
singBhajan();
const addThree = function(num1, num2, num3){
    return num1+ num2+num3;
}
console.log(addThree(2,3,4));
// arrow functions
const singHappy = ()=>{
    console.log("happy birthday");
}
singHappy();
// in arrow functions instead of function keyword just put arrows
const isOdd = (num)=>{
    return num%2!==0;
}
console.log(isOdd(2));
// hoisting 
// in function declararation we can declare a funtion after the call
// function inside function
function app(){
    console.log("we are learning function inside function");
    const myfunc = ()=>{
        console.log("this is insane");
    }
    const add=()=>{
        console.log(2+3);
    }
    myfunc();
    add();
}
app();
// lexical scope --> similar to variable scope
// block scope and function scope
// let and const are block scope
// {
//     let firstName="harshit";
// }
// console.log(firstName);
// var is function scope, U can access it anywhere
{
    var firstName="harshit";
}
console.log(firstName);
// whatever u write in curly braces is block
// default parameters
// if u want pass the value of parameters by default it will be undefined
// function addTwo(a,b=0){
//     return a+b;
// }
// console.log(addTwo(4));
// It will give b as value 8 this time
function addTwo(a,b=0){
    return a+b;
}
console.log(addTwo(4,8));
// rest parameters
function myfunction(a,b,...c){
    console.log("a is", a);
    console.log("b is", b);
    console.log("c is", c);
}
myfunction(2,3,4,5,6,7,8);

