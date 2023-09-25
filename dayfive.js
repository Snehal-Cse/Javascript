// the best way to link js is to mention its link before body tag and use defer
// it will start loading as well as it will parse html and css file and once parsing is done it will execute loaded js file 
// parsing and loading are happening simultaneously so it is prefered method
// DOM -->  Document Object Model
//  console.log(window.document);
//  console.dir(document);
// get Element by id
// for this method u have to give an id 
// console.log( document.getElementById("logo")); 
// console.log(typeof document.getElementById("logo"));
// query Selector-->it can be used to select anything
// const main = document.querySelector("#logo");
// console.log(main);
// const main2 = document.querySelector(".navDetails");
// console.log(main2);
// querySelectorAll --> will give all the classed

//---------- change the text of manage your task-----

// const main3 = document.querySelector("#logo");
// console.log(main3.textContent);
// main3.textContent="NewWeb";
// console.log(main3.textContent);

// it has two property -- textContent and innerText

// ------  change style of elment  --------

// const main3 = document.querySelector(".headline h3");
// main3.style.color = "Yellow";
// const main4 = document.querySelector(".headline button");
// main4.style.backgroundColor="yellow";

// ----- get and Set attributes

// const main2 = document.querySelector(".newform input");
// console.log(main2.getAttribute("placeholder"));
// const main2 = document.querySelector(".section-form input")
// console.log(main2);
// console.log(main2.getAttribute("type"));
// main2.setAttribute("type","password");
// console.log(main2.getAttribute("type"));

// --- get multiple elements using getElementsByClassName
// ------get multiple elements using querySelectorAll
//  const main2 = document.querySelectorAll(".section-signUp input");
//  console.log(main2);
//  console.log(main2[1]);

// ------- change the color of all the elements in nav bar-------

// cant change the color of all using querySelector All 
// use for of and for loop to iterate

// const main1 = document.querySelectorAll(".navDetails a")
// console.log(main1);
// for(let i=0;i<main1.length;i++){
//     const navItems = main1[i];
//     navItems.style.color="yellow";
// }

// -----inner HTML ------

// const main = document.querySelector(".navDetails");
// console.log(main.innerHTML);


// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);
// console.log(rootNode.childNodes[0]);
// console.log(headElementNode.parentNode);
// console.log(headElementNode.nexSibling);
// console.log(headElementNode.nexSibling.nextSibling);
// console.log(headElementNode.nextElementSibling);

// ----- select h1 and go to its parent node and change its colour -------
// const head = document.querySelector(".container h1");
// const head2 = head.parentNode;
// head2.style.backgroundColor="yellow";

// class List 

// const ans = document.querySelector(".section-signUp");
// console.log(ans.classList);
// ans.classList.add("bg-dark");
// ans.classList.remove("bg-dark");
// console.log(ans.classList.contains("className"));
// toggle-->if not add and if its there then it will remove

// add new todo's
// do not use this method
// const ans = document.querySelector(".todoList");
// console.log(ans.innerHTML);
// ans.innerHTML += "<li>NEW TODO</li>"
// ans.innerHTML +="<li> Learn Javascript </li>"

// document.createElement()

// const ans = document.createElement("li");
// ans.textContent="Learn Javasript";
// const find = document.querySelector(".todoList");
// find.append(ans);

// const ans1 = document.createElement("li");
// ans1.textContent="Learn DSA";
// const find1 = document.querySelector(".todoList");
// find1.prepend(ans1);

// const find2 = document.querySelector(".todoList li");
// find2.remove();

// before and after tag

// clone Nodes

// const ans = document.createElement("li");
// ans.textContent = "New Todo";
// const ans2 = ans.cloneNode(true);
// const find = document.querySelector(".todoList ");
// find.append(ans);
// find.prepend(ans2);

// static list and live list
// querySelectorAll gives us static list and getElementsBy... give live list
// const find1 = document.querySelector(".todoList ");
// const listItems = document.getElementsByTagName("li");
// const ans1 = document.createElement("li");

// ans1.textContent="New Todo";
// find1.append(ans1);
// console.log(listItems);

// how to get the dimensions of the elements

// const ans = document.querySelector(".section-todo");
// console.log(ans.getBoundingClientRect());
// console.log(ans.getBoundingClientRect().height);
// console.log(ans.getBoundingClientRect().width);

// ?intro to events

// const ans = document.querySelector(".headline button");
// ans.onclick = function(){
//     console.log("you clicked me");
// }

// another way 

// const ans = document.querySelector(".headline button");
// function clickme(){
//     console.log("How dare to touch me");
// }
// ans.addEventListener("click",clickme);

// another way 

// const ans = document.querySelector(".headline button");
// ans.addEventListener("click",()=>{
//     console.log("how dare you");
// console.log(this);   ----> it will be window itself
// });
// if u use normal function it will give button

// use keypress and mouseover events

// keypress event 
// mouseover event

// keypress event 
// const body = document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })

// mouseover event and mouseleave event

// const ans = document.querySelector(".headline button");
// ans.addEventListener("mouseover",()=>{
//     console.log("mouseover event ");
// })

// const ans2 = document.querySelector(".headline button");
// ans.addEventListener("mouseleave",()=>{
//     console.log("mouseleave event ");
// })

// project

// const todoForm = document.querySelector(".section-form");
// const todoInput = document.querySelector(".section-form input[type='text']");
// const todoList = document.querySelector(".todoList");

// todoForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const newTodoValue = todoInput.value;
//     const newLi = document.createElement("li");
//     const newLiInnerHtml = `
//         <span class="text">${newTodoValue}</span>
//         <div class="todo_button">
//             <button class="button1 Done">Done</button>
//             <button class="button2 Remove">Remove</button>
//         </div>
//     `;
//     newLi.innerHTML = newLiInnerHtml;
//     todoList.appendChild(newLi);
//     todoInput.value = "";
// });

// todoList.addEventListener("click", (e) => {
//     if (e.target.classList.contains("Remove")) {
//         const removeLi = e.target.parentNode.parentNode;
//         removeLi.remove();
//     }
//     if (e.target.classList.contains("Done")) {
//         const liSpan = e.target.parentNode.previousElementSibling; // Fix typo here
//         liSpan.style.textDecoration = "line-through";
//     }
// });

