let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");
div.addEventListener("click",function(){
    console.log("div has been clicked");

})
ul.addEventListener("click",function(e){
    // e.stopPropagation();
    console.log("ul has been clicked");

},true)
for (let li of lis){
    li.addEventListener("click",function(e){
        // e.stopPropagation();
        console.log("list is clicked");
    })
}
let butt=document.querySelector("button");
let inp=document.querySelector("input");
let unorder=document.querySelector("button+ul");
butt.addEventListener("click",function () {
    let list1=document.createElement("li");
    list1.innerText=inp.value;
    let btn=document.createElement("button");
    btn.innerText="delete";
    list1.append(btn);
    unorder.append(list1);
    // btn.addEventListener("click",function () {
    //     btn.parentElement.remove();
    // })
    inp.value="";
})
// event delegation
unorder.addEventListener("click",function (e) {
    if (e.target.nodeName=="BUTTON") {
        e.target.parentElement.remove();
    }
})