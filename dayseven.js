// event bubbling 

//  const body = document.body;
//  const grandpa = document.querySelector(".grandpa");
//  const parent = document.querySelector(".parent");
//  const child = document.querySelector(".child");

//  child.addEventListener("click",()=>{
//     console.log("you clicked on child");
//  })
//  parent.addEventListener("click",()=>{
//     console.log("you clicked on parent");
//  })
//  grandpa.addEventListener("click",()=>{
//     console.log("you clicked on grandpa");
//  })
//  body.addEventListener("click",()=>{
//     console.log("you clicked on body");
//  })

//  event caputuring 
// console.log("hello");

// child.addEventListener("click",()=>{
//     console.log("captured child");
//  },true)
//  parent.addEventListener("click",()=>{
//     console.log("captured  parent");
//  },true)
//  grandpa.addEventListener("click",()=>{
//     console.log("captured  grandpa");
//  },true)
//  body.addEventListener("click",()=>{
//     console.log("captured  body");
//  },true)


//  event delegation

// const grandpa = document.querySelector(".grandpa ");
// grandpa.addEventListener("click",()=>{
//     console.log("you click me");
// })
// uske andar khi bhi click kr it will give output

// const grandpa = document.querySelector(".grandpa");
// grandpa.addEventListener("click",(e)=>{
//     console.log(e.target);
// })
// const parent = document.querySelector(".parent");
// parent.addEventListener("click",(e)=>{
//     console.log(e.target);
// })