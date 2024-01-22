"use strict";
document.addEventListener("DOMContentLoaded",()=>{

document.querySelector("button").addEventListener("click",()=>{
  let x = document.querySelector("#num").value;
  let n = document.querySelector("#rise").value;
  let ans=x**n;
   document.querySelector("p").innerHTML = `${x} raised ${n} is equal to ${ans}`;
});
});

