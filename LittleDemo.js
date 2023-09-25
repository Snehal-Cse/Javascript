const body = document.body;
const touch = document.querySelector("button");
// const intervalId = setInterval(()=>{
//     const red = Math.floor(Math.random()*256);
//     const green= Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const rgb = `rgb(${red},${green},${blue})`;
//     body.style.backgroundColor = rgb;
// },1000);
touch.addEventListener("click",()=>{
    clearInterval(intervalId);
    touch.textContent= body.style.backgroundColor;
});