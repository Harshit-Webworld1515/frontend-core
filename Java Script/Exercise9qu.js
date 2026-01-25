let btn=document.createElement("button");
document.body.appendChild(btn);
btn.innerText="click here";
btn.addEventListener("click",()=>{
    console.dir(btn);
    btn.style.color="red";
})
let h2 = document.createElement("h2");
document.body.appendChild(h2);
h2.innerText = "This is 2nd question";

let input = document.createElement("input");
document.body.appendChild(input);
input.placeholder = "enter your name";
input.type = "text";

// ✅ Event listener to update heading dynamically
input.addEventListener("input", function() {
    // Sirf letters (A-Z, a-z) aur space allow karo
    let filtered = input.value.replace(/[^A-Za-z\s]/g, "");
    
    // Agar user ne galat character dala ho to use hata do
    console.dir(input.value);
    if (input.value !== filtered) {
        input.value = filtered;
    }
    
    // Heading me dikhado current valid name
    h2.innerText = filtered;
});
h3=document.createElement("h3");
document.body.appendChild(h3);
h3.innerText="to do list";
let inpu=document.createElement("input");
document.body.appendChild(inpu);
inpu.addEventListener("input",function(){
    h3.innerText=inpu.value;
    console.log(inpu.value);
})