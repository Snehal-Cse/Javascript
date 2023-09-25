// parameter destructuring
// it is used in object and react js
const person={
    firstName:"snehal",
    age:20,
    gender:"female"
};
function info(obj){
    console.log(obj.firstName);
    console.log(obj.age);
    console.log(obj.gender);
}
info(person);
// this is the another way to to write the functions
function info2({firstName,age,gender}){
    console.log(firstName);
    console.log(age);
    console.log(gender)
}
info2(person);
// callback functions
// we can call back function inside a function
function myfunc2(name){
    console.log("hello" + " " + name);
}
function myfunc1(callback){
    console.log("this is sike");
    callback("snehal");
}
myfunc1(myfunc2);
// function returning function

function myfunc3(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}
const solve = myfunc3();
solve();
// another example
function myfunc4(){
    function helloji(){
       return "hello shammi";
    }
    return helloji;
}
let ans = myfunc4();
console.log(ans());
// important array methods 
// for each 
// map 
// reduce
// filter
function myResult(num, index){
    console.log("index"+":"+index);
    console.log(2*num);
}
const numbers=[1,2,3,4,5,6];
// for(let i=0;i<numbers.length;i++){
//     myResult(numbers[i],i);
// }
// above for loop can be replaced by
numbers.forEach(myResult);
// print the firstname of all the users
const users = [
    {firstName:"snehal", age:23},
    {firstName:"sanjana", age:24},
    {firstName:"jigar",age:27}
];
// function userName(users){
//     console.log(users.firstName);
// }
// users.forEach(userName);
users.forEach(function(user){
console.log(user.firstName);
});
//  can replace function key word with arrow
// map 
// it will always make new array
const nums = [1,2,3,4,5,6];
// const square = function(number1){
//     return number1*number1;
// }
// console.log(nums.map(square));
let another = nums.map((num1)=>{
    return num1*num1;
}
)
console.log(another);
// store the firstname of the users
const members=[
{firstName:"snehal", age:21},
{firstName:"sanjana", age:24},
{firstName:"jigar",age:27}
];
let mem = members.map((first)=>{
    return first.firstName;
});
console.log(mem);
// map store each and everything in an array
// for each do not store it in form of an array + it wont return anything
// filter method
// it will always return true or false
const numz =[1,2,3,4,5,6];
let review = numz.filter((num6)=>{
    return num6%2==0;
});
console.log(review);
// this will give the output as an array of even numbers
// use reduce method to find the sum of an array
const num3=[1,2,3,4,5,6];
const sum = num3.reduce((accumulator,currentValue)=>{
return accumulator+currentValue;
});
console.log(sum);
// explain the working of the cart 
const userCart = [
{Id:1,productName:"mobile",price:12000},
{Id:2,productName:"laptop",price:20000},
{Id:3,productName:"computer",price:32000},
{Id:4,productName:"grinder",price:42000}
];
const solution = userCart.reduce((totalPrice,currentProduct)=>{
return totalPrice + currentProduct.price;
},0);
console.log(solution);
// uppercase alphabets -- 65 to 90
// lowercase alphabets -- 97 to 122
// sorting
// filter, map and forEach do not change the original array
const arr = [5,2,8,1,6];
console.log(arr.sort());
// js consider them as string
const arr1 = [5,2,1200,6000,4];
console.log(arr1.sort());
// there fore we use different approach to solve thsi
const arr2 = [5,2,1200,6000,4];
const sol = arr2.sort((a,b)=>{
    return a-b;
});
console.log(sol);
// sort the products from low to high 
const productz = [
    {productId:1, productName:"p1",price:400},
    {productId:2, productName:"p2",price:1400},
    {productId:3, productName:"p3",price:100},
    {productId:4, productName:"p4",price:880}
];
let sortThem = productz.sort((a,b)=>{
   return a.price-b.price ;
});
console.log(sortThem);
// use b - a to sort them according to their price
// find method
const myArray = ["dogy","cat","goat","giraffe"];
console.log(myArray.find((str)=>{
    return str.length===3;
}));
// find the user whose id is 3
const user3=[
    {userId:1, userName:"snehal"},
    {userId:2, userName:"sneha"},
    {userId:3, userName:"sneh"},
    {userId:4, userName:"snehali"}
];
const sol1 = user3.find((userk)=>{
    return userk.userId==3;
});
console.log(sol1.userName);
// every method
const arr5 = [2,7,6,8,10];
const sol5 = arr5.every((user)=>{
    return user%2==0;
});
console.log(sol5);
// it will give true or false 
// some method
// check whether a single number is even or not 
const number7=[1,9,3,5];
console.log(number7.some((num)=>{
    return num%2==0;
}));
// fill method
//  we can fill our array with one value
// value start end
const myArra = new Array(10).fill(-1);
console.log(myArra);
const arr6 = [1,2,3,4,5,6,7.8];
console.log(arr6.fill(0,3,5));
// last index wont be included
// splice method
// start delete insert -- no of items deleted, from where it is starting
const myArray1 = [1,2,3,4,5,6];
myArray1.splice(1,2,7,8);
console.log(myArray1);
// iterables are those where we can apply for of loop
const firstName = "harshit";
for(let char of firstName){
    console.log(char);
}
// array and strings are iterable but object is not iterable, we can check this using for of loop 
// array like object are those we can have length and where we can access its index
// sets is iterable, always put iterable array or string inside in parenthesis
const number1 = new Set([1,2,3]);
console.log(number1);
number1.add("snehal");
console.log(typeof (number1));
// in set no duplicates allowed and no index based access like array and length is also not difend
// this is object
const newSet = new Set();
newSet.add(1);
newSet.add(2);
console.log(newSet);
if(newSet.has(1)){
    console.log("success");
}
else{
    console.log("failure");
}
// set is iterable so we can apply for of loop
for(let item of newSet){
    console.log(item);
}
// suppose if i want unique elements from the given set
const myArray6 = [1,2,3,4,4,4,4,3,5];
const newSett = new Set(myArray6);
// newSett.add(myArray6); -- this way it wont add unique element
for(let item of newSett){
    console.log(item);
}
// map datastructure 
//  in object key is always a string 
const person1 = new Map();
person1.set("firstName","Snehal");
person1.set("age",7);
console.log(person1);
console.log(person1.get("firstName"));
for(let key of person1.keys()){
    console.log(key);
}
// clone using object.assign
const obj1 = {
    firstname:"snehal",
    secondname:"bandi",
    age:20
};
 const obj2 = {...obj1};
// const obj2 = obj1;
obj2.sex = "female";
console.log(obj2);
console.log(obj1);
if(obj1===obj2){
console.log("true");
}
else{
    console.log("false");
}
// optional chaining
const user = {
    firstName:"harshit",
    address:{houseNumber:"123"}
};
console.log(user.address.houseNumber);
// use ?. it will give undefined if it doesnot exist
// methods
// function inside object 
const person2 = {
    oneName:"snehal",
    secondName:"bandi",
    age:35,
    about:function(){
        console.log("your name is "+this.oneName+"and your age is "+this.age);
    }
};
person2.about();
console.log(person2.about);
 console.log(this);
//  this will give window object 
// if u will use "use strict "in ur js file it will give u undefined on using this keyword in console.log
// call bind and apply methods 
function hello(){
    console.log("hello world");
}
hello();
hello.call();

