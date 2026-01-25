// qu-1
let num=120;
if (num%10==0) {
    console.log("good");
} else {
    console.log("bad");
}
// qu-2
let User_name = prompt("Enter username");  
let age = prompt("Enter your age");  
alert(`${User_name} is ${age} years old`);
// num3
nums=3;
switch (nums) {
    case 1:
        console.log("January – February – March");
        break;
    case 2:
        console.log("April – May – June");
        break;
    case 3:
        console.log("July – August – September");
        break;
    case 4:
        console.log("October – November – December");
        break;
    default:
        console.log(" invalid quater name");
        break;
}
// qu-4
let word="anirudhha";
if (word[0]== 'a' ||word[0]== 'A' && word.length>5) {
    console.log("Golden word");
} else {
    console.log("not");
}
// qu-5
let num1=12;
let num2=34;
let num3=23;
if (num1>num2 && num1>num3) {
    console.log("num1 is greater");
} else if (num2>num3 && num2>num1) {
    console.log("num2 is greater"); 
}else{
    console.log("num3 is greater");
}
// qu-6
let num4=45636;
let num5=3406;
if (num4%10 == num5%10) {
    console.log("end with same digit");
}