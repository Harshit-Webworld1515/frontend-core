let inp=document.createElement("input");
let btn=document.createElement("button");
let body=document.querySelector("body");
btn.innerHTML="click me";
inp.setAttribute("placeholder","username")
btn.setAttribute("id","btn");
body.append(inp);
body.append(btn);
btn.style.backgroundColor="blue";
// btn.style.color="white";
// document.querySelector("button").style.backgroundColor="blue";
document.querySelector("#btn").style.color="white";
// Question-4
let h1=document.createElement("h1");
h1.innerHTML="DOM Practice";
h1.style.textDecoration="underline";
h1.style.color="purple";
body.prepend(h1);
h1.prepend("Chapter-1:");
// qu-5
let p=document.createElement("p");
p.innerHTML='Apna College <b>Delta</b> Practice';
h1.insertAdjacentElement("afterend",p);

