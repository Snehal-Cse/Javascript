const ans = document.querySelector(" button");
const ans2 = document.querySelector(".current");
const body = document.body;
function generator(){
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const randomColor =`rgb(${red},${blue},${green})`;
    return randomColor;
}
ans.addEventListener("click",()=>{
    const randomColor = generator();
    body.style.backgroundColor=randomColor;
    ans2.textContent=randomColor;
});