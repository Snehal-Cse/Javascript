// call and bind methods
const user1 = {
    firstName:"snehal",
    secondName:"bandi",
    age:23,
    about:function(hobby, profession){
        console.log(this.firstName, this.age, hobby, profession);
    }
};
const user2 = {
    firstName:"sneha",
    age:29
}
user1.about.call(user1,"sleeping", "coding");
// another way to do this is by defining the function outside
function about(hobby){
    console.log(this.firstName,this.age,hobby);
}
const user3 = {
    firstName:"snehal",
    secondName:"bandi",
    age:23
}
const user4 = {
    firstName:"sneha",
    age:29
}
about.call(user3);
about.call(user4);
// apply --> similar to call, instead of passing extra argument like sleeping,coding seperately pass them in a list -->["sleeping","coding"]
// bind will store it in a function
const func = about.bind(user3,"guitar");
func();
// --------------------------------------------------------
// in arrow function this doesnt exit
// arrow function takes this from surrounding
// object oriented programming
const person = {
    firstName :"snehal",
    secondName: "bandi",
    email: "snehalbandi5@gmail.com",
    age:21,
    about:function(){
        return this.firstName + " and "+ this.email;
    },
    is18 : function(){
       return this.age>=18;
    }
}
console.log(person.about());
console.log(person.is18());
// this is very tedious so we will make a function that will create the object add key value pair and return the object
// first create a empty object
// add the key value pair
// and return that object
function createUser(firstName, secondName, email,age, address){
   const person1 = {};
   person1.firstName=firstName;
   person1.secondName=secondName;
   person1.email=email;
   person1.age=age;
   person1.address=address;
   person1.about = function(){
    return this.firstName + " and "+ this.email;
};
person1.is18 = function(){
   return this.age>=18;
};
return person1;
}
const info = (createUser("harshit","jain","harshit.cs21@gmail.com",21,"bengaluru"));
console.log(info);
const info1 = info.about();
console.log(info1);
// functions inside the object is known as method
// even this code has lot of errors--- > this is taking lot of space so we will create a object named as userMethods to store this methods
// use object.create
const obj1 = {
    key1:"value1",
    key2:"value2"
}
const obj2 = Object.create(obj1);
//  above line is setting object 2 ka proto as object 1
obj2.key3 = "value3";
console.log(obj2.key1);
// using Object.create we can access the items present in obj 1
//  __proto__ and [[prototype]] --> these are exactly same and prototype is completely different
console.log(obj2.__proto__);
// we are solving the problem
console.log("new concept");
const userMethods = {
    about: function(){
       return this.firstName+"and"+this.age;
    },
    is18 : function(){
        return this.age>=18;
    },
    sing: function(){
        return "twinkle twinkle little star";
    }
}
function createUser2(firstName, age,secondName){
         const user5 = Object.create(userMethods);
        //  this line is create an empty object and and giving us proto of usermethods
         user5.firstName=firstName;
         user5.age=age;
         user5.secondName=secondName;
         return user5;
}
const information = createUser2("snehal",21,"bandi");
console.log(information);
console.log(information.about());
console.log(information.is18());
console.log(information.sing());
// function can act as objects too and it has properties like name, call, bind, apply
// whenever we create function it gives us free space which is a object and that is prototype
function createUser3(firstName, age, secondName){
    const user6 = Object.create(createUser3.prototype);
     user6.firstName=firstName;
    user6.age=age;
    user6.secondName=secondName;
    return user6;
}
createUser3.prototype.about = function(){
    return this.firstName + " and "+ this.age;
};
createUser3.prototype.is18 = function(){
    return this.age>=18;
};
const info2 = createUser3("snehal", 21,"bandi");
console.log(info2.about());
// new keyword --> it will create the empty object
// it will return that object 
// Object.create ka work bhi kar lega
// New key word will reduce lot of efforts
function createUser4(firstName,secondName,age){
    this.firstName=firstName;
    this.secondName=secondName;
    this.age=age;
}
createUser4.prototype.about=function(){
    return this.firstName + " and "+ this.age;
}
createUser4.prototype.is18 = function(){
    return this.age>=18;
};
const info8 = new createUser("snehal","bandi",21);
console.log(info8.about());
for(let i in info8){
    console.log(i);
}
// create a function then use prototype then use new keyword
// class keyword 
class learn{
    constructor(firstName,secondName,age){
        console.log("constructor called");
        this.firstName=firstName;
        this.secondName=secondName;
        this.age=age;
    }
    about(){
        return this.firstName + this.age;
    }
    sing(){
        return "twinkle twinkle";
    }
    is18(){
        return this.age>18;
    }
}
const learn2 = new learn("snehal","bandi",21);
console.log(learn2.about());
// make a class animal and add properties and methods
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return "i eat grass";
    }
}
class Animal2 extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
}
}
const dog = new Animal("shitzu",5);
const cat = new Animal2("lui",3);
console.log(cat.name);
console.log(dog.eat());
console.log(dog.name);
// super keyword
// getters and setters
class person3{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName(){
        return this.firstName+" " + this.lastName;
    }
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName=lastName;
    }
}
const info5 = new person3("snehal","bandi",21);
console.log(info5.fullName);
info5.setName("sneha","jain");
console.log(info5.fullName);
// static methods and properties
// we use static method and static properties.. can be called directly using class name
