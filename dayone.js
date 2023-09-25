"use strict";
console.log("hello world");
//if u are linking js file before body use defer after inverted comma
// console.log is used to print something in console
//  variable can used to store information
var firstName ="snehal";
console.log(firstName);
// we can change the value of variable
firstName="shammi";
console.log(firstName);
// "use strict";
var value = 8;
console.log(value+10);
console.log(value*10);
// u can not initiate a variable with a number
// use underscore and dollar symbol
// snack_case and camelCase
// let keyword 
// use let instead of var 
let firstname="shiya";
console.log(firstname);
// const -- u cant change the value of const 
const pi=3.14;
console.log(pi);
// string indexing 
let secondName="snehal   ";
console.log(secondName[3]);
console.log(secondName.length); 
console.log(secondName[secondName.length-2]);
//methods in string
// trim()
//toUpperCase()
// toLowerCase()
// slice()
let randomName = "   harshit";
console.log(randomName.length);
randomName = randomName.trim();
console.log(randomName.length);
console.log(randomName.toUpperCase());
console.log(randomName.slice(0,6));
//typeof operator
let age=21;
let name="snehal";
console.log(typeof name);
console.log(typeof age);
// if you want to convert any number in string
let year = 22;
console.log(typeof year);
year = year+"";
console.log(typeof year);
// "34" --> this is a string
//  if you want to convert any string to number just put +
let ser = +"snehal";
console.log(typeof ser);
// this will give output as number
//age = Number(age);
// this can also convert string to number
// string concatenation
let string1="snehal";
let string2="bandi";
let fullname=string1+" "+string2;
console.log(fullname);
 // template string  
 let aboutMe="my name is "+string1+" my second name is "+ string2;
 console.log(aboutMe);
 let aboutUs = `my name is ${string1}and my surname is${string2}`;
 console.log(aboutMe);
// undefined if u dont initialize the value of variable then check its type it will show undefined in case of var and let 
// if u define the value of a variable as null and u check the type of variable it will show null
// typeof null is object 
// BigInt(12345677);
let myNum = 123n;
let mySame = BigInt(123);
//  both represents the BigInt
// boolean and comparsion operators 
let num1 = 4;
let num2= 9;
console.log(num1<num2);
// this will return true or false
// == is used to check equality, only check values 
// === is used to check values and datatypes
// != and !==
// if else operator
let saal=12;
if(saal>18){
    console.log("you are");
}
else{
    console.log("you are not");
}
// truthy and falsy values
// falsy --> null undefined "" 0 false
// ternary operator or conditional operator
let yea = 1;
if(yea>5){
    console.log("this is true ");
}
else{
    console.log("this is not true");
}
//  an alternative way to write this is by using ternary operator
let ye=2;
let drink = ye>15?"coffee":"milk";
console.log(drink);
//  and && or || operator
var cycleAge=12;
var cycleName="boozer";
if(cycleName[0]==="b" && cycleAge>11){
    console.log("this is crazy");
}
else{
    console.log("it is okay");
}
// prompt is used to take input and it is used to take input in strings
// lets make a game 
let winningNum=12;
// let userNum=+prompt("guess a number");
// put a + because it will take input in form of string
// nested if else
// if(userNum===winningNum){
//     console.log("you win");
// }
// else{
//     if(userNum>winningNum){
//         console.log("two high");
//     }
//     else{
//         console.log("two low");
//     }
// }
// if else if else
// switch

// let day = +prompt("enter the day");
// switch(day){
// case 0:
//     console.log("Monday");
//     break;
// case 1:
//   console.log("Tuesday");
//   break;
// case 2:
//  console.log("Wednesday");
//  break;
//  default:
//     console.log("invalid");
//     break;
// }
// while loop
let i = 0;
while(i<5){
    console.log(i);
    i++;
}
let j=1;
let total=0;
while(j<5){
    total+=j;
    j++;
}
console.log(total);
// for loop 
for(let t=0;t<=4;t++){
    console.log(t);
}
// we made for loop using let it will not exist outside the forloop it follows scope concept
// var variable can be accessed outside also
// break and continue keyword
console.log("new concept");
for(let b =0;b<=4;b++){
    if(b===2){
        // break;
        continue;
    }
    console.log(b);
}
// do while loop 
let c=10;
do{
    console.log(c);
    c++
}while(c<8);
// it will execute then it will check the conditions
// array is reference type
console.log("array concept");
let fruits=["apple","mango","grapes"];
console.log(fruits);
console.log(fruits[1]);
fruits[1]="banana";
console.log(fruits);
console.log(typeof fruits);
// array is an object Array.isArray(name of the array)
console.log(Array.isArray(fruits));
// push pop in array
fruits.push("orange");
console.log(fruits);
let poppedFruit =fruits.pop();
console.log(fruits);
console.log(poppedFruit);
// push will add in the end 
// pop will remove from the end
// unshift is used to add fruit in the begining
// shift is used to remove fruit from the begining
// push pop is faster than shift and unshift

