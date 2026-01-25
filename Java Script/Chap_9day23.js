let btns = document.querySelectorAll("button");
console.dir(btns);
for (const btn of btns) {
    btn.onclick = activity;
    btn.onclick = function () {
        alert("2nd time with on click method it show 1st");
        console.log("samjh gya achhe se bhai");
    };
    btn.onmouseenter = function () {
        console.log("time you come on button");
    }
    // 3rd way is addEventListener
    btn.addEventListener("click", color);
    btn.addEventListener("click", setcolor);
    btn.addEventListener("dblclick", function () {
        console.log("you double click this time")
    });
}
function activity() {
    alert("you clicked the button");
}
function color() {
    console.log("red");
    alert("you 2nd time clicked the button");
}
function setcolor() {
    console.log("blue");
}
// multiple Event Listener for element
let p = document.querySelectorAll("p");
p[0].innerText = "lol";
p[0].addEventListener("click", function () {
    let a = Math.floor(Math.random() * 100);
    p[0].innerText = ` this time number is: ${a}`;
    console.log("number is", a);
})
p[0].addEventListener("mouseenter", role);
function role() {
    console.log("time Scrolling");
}
function redunDancy() {
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}
let button = document.querySelector("#last")
button.addEventListener("click", redunDancy)
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
h1.addEventListener("click", redunDancy);
h3.addEventListener("click", redunDancy);
p[1].addEventListener("click", redunDancy);
// Keyboard Event
let div = document.createElement("div");
document.body.appendChild(div);
div.style.height = "35px";
div.style.width = "81px";
div.style.border = "2px solid black"
div.style.backgroundColor = "red";
div.style.margin = "40px";
div.style.borderRadius = "40px";
div.addEventListener("click", function (e) {
    console.dir(e);
    console.log("button clicked");
})
let str = document.createElement("input");
document.body.appendChild(str);
str.placeholder = "Type something";
str.addEventListener("keydown", (e) => {
    console.dir(e);
    console.log("code is: ", e.code);
    console.log("Pressed:", e.key);
});

str.addEventListener("keyup", (e) => {
    console.log("Released:", e.key);
});
