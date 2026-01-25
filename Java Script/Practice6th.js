a=25;
squa=(a)=>(a*a);
console.log(squa(a));
let id=setInterval(() => {
    console.log("ram ram ji")
}, 2000);
setTimeout(() => {
    clearInterval(id);
    console.log("job is done")
}, 10000);