let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
console.log("first array", arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);
// 2nd question and 3rd
let count = 0;
let number = 287152;
let sum = 0
while (number > 0) {
    sum += (number % 10);
    number = Math.floor(number / 10);
    count++;
}
console.log(count)
console.log(sum);
let n=10;
let fact=1;
for (let i = 1; i <=n; i++) {
    fact*=i    
}
if (n==0) {
    fact=1;
}
console.log(fact)
