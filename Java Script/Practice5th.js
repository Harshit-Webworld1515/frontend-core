function findAvg(a,b,c){
    console.log(`the avg is: ${(a+b+c)/3}`);
}
findAvg(35,22,45);
// 2nd qu
function printTable(a){
    for (let i = 1; i < 11; i++) {
        console.log(a*i);
    }
}
printTable(27);
// qu-3
let sum=34
function sumFirstn(n){
    let sum=0;//function scope
for (let i = 0; i <= n; i++) {
    sum+=i;
}
console.log("function scope",sum)
return sum;
}
console.log("global scope",sum);
console.log("fxn call",sumFirstn(10));
// qu-4
function concatenate(arr) {
    let element = ""; // empty string se start karo
    for (let i = 0; i < arr.length; i++) {
        element += arr[i]; // concatenate karte jao
    }
    return element;
}

let arr = ["ram","shyam","radhe","shankar","saraswati","krishna"];
console.log(concatenate(arr));
