// we have to make a XMLHttpRequest then we have to request server
// Api application programming interface
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// how to fetch the upi

const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url).then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("something is wrong");
    }
  
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("inside the error");
    console.log(error);
})
