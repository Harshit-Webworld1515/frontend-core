const arr = [25,17,14,19,23,25,16,20];
const Arravg = (arr) => {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        number += arr[i];
    }
    return number / arr.length;
}
console.log(Arravg(arr)); // 19.875
//qu-2
isEven=a=>{
    if (a%2==0) {
        return "even";
    } else {
        return "odd"
    }
}
// const isEven = a => a % 2 === 0 ? "even" : "odd";//ternary operator ka use karne se
console.log(isEven(238762463));
