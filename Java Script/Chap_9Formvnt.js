let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let inp = document.querySelectorAll("input");
    console.dir(inp[0].value);
    console.dir(inp);
    console.dir(form.elements);
    console.dir(form.elements[1].value);
    alert(`${inp[0].value} user the put the password ${form.elements["pass"].value}`);//here pass is the name attribute of form element
})
let form2 = document.createElement("form");
document.body.appendChild(form2);
let h1 = document.createElement("h1");
form2.appendChild(h1);
h1.innerText = " your secont form share your experience: "
let inputtt = document.createElement("input");
form2.appendChild(inputtt);
inputtt.placeholder = "Share Experience";
let buttt = document.createElement("button");
form2.appendChild(buttt);
buttt.innerText = "done";
form2.addEventListener("submit", function (event) {
    event.preventDefault();
    inputtt.value = "";
})
inputtt.value = "try again";
console.dir(inputtt.value);
inputtt.addEventListener("change", function () {
    console.log("value update");
    console.dir(inputtt.value);
})
inputtt.addEventListener("input", function () {
    console.dir(inputtt.value);
})