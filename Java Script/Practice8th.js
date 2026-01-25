let pjs=document.createElement("p");
pjs.innerHTML="Hey I am red!"
pjs.style.color="red";
let body=document.querySelector("body");
body.append(pjs);
let h3js=document.createElement("h3");
h3js.innerText="Hey I am blue!";
h3js.style.color="blue";
body.append(h3js);
let div=document.createElement("div");
div.style.border="2px solid black";
div.style.backgroundColor="pink";
body.append(div);
let h1=document.createElement("h1");
h1.innerText="I am in a Div"
div.append(h1);
let p=document.createElement("p");
p.innerHTML="mee to";
div.appendChild(p);
